// ═══════════════════════════════════════════════════════════════════
// HABITFLOW — Google Apps Script Backend
// Paste this entire file into: Extensions → Apps Script → Code.gs
// Then click Deploy → New Deployment → Web App
// ═══════════════════════════════════════════════════════════════════

const SPREADSHEET_ID = "1IW_yYpgiK2jz1UqXR8G4s72yVAJmMD8_PoU2-Jt1BWs";

// Sheet names — will be auto-created if missing
const SHEETS = {
  HABITS:  "Habits",
  LOGS:    "Logs",
  STREAKS: "Streaks",
  BODY:    "Body",
  META:    "Meta",
};

// ── Entry points ─────────────────────────────────────────────────────────────

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  // Allow CORS from any origin (required for local file access)
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);

  try {
    ensureSheetsExist();
    const params = e.parameter || {};
    const action = params.action || (e.postData ? JSON.parse(e.postData.contents).action : null);
    const body   = e.postData ? JSON.parse(e.postData.contents) : params;

    let result;
    switch (action) {
      case "getAll":      result = getAllData();            break;
      case "saveHabits":  result = saveHabits(body.habits); break;
      case "saveLogs":    result = saveLogs(body.logs);     break;
      case "saveStreaks": result = saveStreaks(body.streaks);break;
      case "saveBody":    result = saveBody(body.bodyLogs); break;
      case "saveMeta":    result = saveMeta(body.meta);     break;
      case "ping":        result = { ok: true, ts: new Date().toISOString() }; break;
      default:            result = { error: "Unknown action: " + action };
    }
    output.setContent(JSON.stringify({ success: true, data: result }));
  } catch (err) {
    output.setContent(JSON.stringify({ success: false, error: err.message }));
  }

  return output;
}

// ── Sheet bootstrap ──────────────────────────────────────────────────────────

function ensureSheetsExist() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  Object.values(SHEETS).forEach(name => {
    if (!ss.getSheetByName(name)) {
      ss.insertSheet(name);
    }
  });
}

// ── READ all data ────────────────────────────────────────────────────────────

function getAllData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  return {
    habits:  readJSON(ss, SHEETS.HABITS),
    logs:    readJSON(ss, SHEETS.LOGS),
    streaks: readJSON(ss, SHEETS.STREAKS),
    bodyLogs:readJSON(ss, SHEETS.BODY),
    meta:    readJSON(ss, SHEETS.META),
  };
}

// ── WRITE helpers ────────────────────────────────────────────────────────────

function saveHabits(habits) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  writeJSON(ss, SHEETS.HABITS, habits);

  // Also write a human-readable table on a separate area for easy viewing
  const sheet = ss.getSheetByName(SHEETS.HABITS);
  const headers = ["ID","Name","Icon","Measure","Target","Frequency","Category"];
  const rows = (habits || []).map(h =>
    [h.id, h.name, h.icon, h.measure, h.target ?? "", h.frequency, h.category]
  );
  // Write table starting at column C
  sheet.getRange(1, 3, 1, headers.length).setValues([headers])
    .setFontWeight("bold").setBackground("#E8E0FF");
  if (rows.length) {
    sheet.getRange(2, 3, rows.length, headers.length).setValues(rows);
  }
  return { saved: (habits || []).length };
}

function saveLogs(logs) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  writeJSON(ss, SHEETS.LOGS, logs);

  // Human-readable: write each date as a row in a summary sheet
  const sheet = ss.getSheetByName(SHEETS.LOGS);
  const entries = [];
  Object.entries(logs || {}).forEach(([date, dayLogs]) => {
    Object.entries(dayLogs || {}).forEach(([habitId, value]) => {
      entries.push([date, habitId, JSON.stringify(value)]);
    });
  });
  if (entries.length) {
    // Write summary table starting at col C
    sheet.getRange(1, 3, 1, 3).setValues([["Date","HabitID","Value"]])
      .setFontWeight("bold").setBackground("#CCE8FF");
    sheet.getRange(2, 3, entries.length, 3).setValues(entries);
  }
  return { saved: entries.length };
}

function saveStreaks(streaks) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  writeJSON(ss, SHEETS.STREAKS, streaks);

  const sheet = ss.getSheetByName(SHEETS.STREAKS);
  const rows = Object.entries(streaks || {}).map(([id, val]) => [id, val]);
  sheet.getRange(1, 3, 1, 2).setValues([["HabitID","Streak"]])
    .setFontWeight("bold").setBackground("#D4F5D4");
  if (rows.length) {
    sheet.getRange(2, 3, rows.length, 2).setValues(rows);
  }
  return { saved: rows.length };
}

function saveBody(bodyLogs) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  writeJSON(ss, SHEETS.BODY, bodyLogs);

  const sheet = ss.getSheetByName(SHEETS.BODY);
  const headers = ["Date","Weight","BMI","Hydration%","Protein(g)","VisceralFat","Hip(cm)","Waist(cm)","Arm(cm)"];
  const rows = Object.entries(bodyLogs || {})
    .sort(([a],[b]) => a.localeCompare(b))
    .map(([date, e]) => [
      date,
      e.weight ?? "", e.bmi ?? "", e.hydration ?? "",
      e.protein ?? "", e.visceral ?? "", e.hip ?? "",
      e.waist ?? "", e.arm ?? ""
    ]);
  sheet.getRange(1, 3, 1, headers.length).setValues([headers])
    .setFontWeight("bold").setBackground("#FFE5CC");
  if (rows.length) {
    sheet.getRange(2, 3, rows.length, headers.length).setValues(rows);
  }
  return { saved: rows.length };
}

function saveMeta(meta) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  writeJSON(ss, SHEETS.META, meta);
  return { saved: true };
}

// ── Low-level JSON cell storage ──────────────────────────────────────────────
// Stores the full JSON blob in cell A1 of each sheet (efficient, no row limits)

function readJSON(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return null;
  const val = sheet.getRange("A1").getValue();
  if (!val) return null;
  try { return JSON.parse(val); } catch { return null; }
}

function writeJSON(ss, sheetName, data) {
  const sheet = ss.getSheetByName(sheetName);
  sheet.getRange("A1").setValue(JSON.stringify(data));
  // Timestamp in B1
  sheet.getRange("B1").setValue("Updated: " + new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
}
