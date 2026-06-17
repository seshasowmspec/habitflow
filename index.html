<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="HabitFlow">
<meta name="theme-color" content="#6C47FF">
<title>HabitFlow ✨</title>

<!-- PWA Manifest & Icons -->
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="icon-192.png">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { font-size: 16px; -webkit-text-size-adjust: 100%; }
  body {
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    overscroll-behavior: none;
    transition: background 0.4s ease, color 0.3s ease;
  }
  :root {
    --bg: #FAFAF5; --card: #FFFFFF; --border: #EDEBE4;
    --text: #1E1B2E; --sub: #9996AA; --accent: #6C47FF;
    --accent-bg: #F0EEFF; --success: #16A34A; --warn: #EA580C;
    --danger: #DC2626; --header-bg: linear-gradient(160deg,#FFF6F0 0%,#F0EEFF 100%);
    --nav-bg: rgba(250,250,245,0.95); --input-bg: #F8F7FF;
    --shadow: 0 4px 24px rgba(108,71,255,0.08);
    --shadow-lg: 0 12px 40px rgba(108,71,255,0.14);
  }
  body.dark {
    --bg: #0C0C1A; --card: #161625; --border: #252540;
    --text: #EDE9FF; --sub: #7B76A0; --accent: #A78BFA;
    --accent-bg: #261C4A; --success: #4ADE80; --warn: #FB923C;
    --danger: #F87171; --header-bg: linear-gradient(160deg,#120824 0%,#0C1A2E 100%);
    --nav-bg: rgba(22,22,37,0.96); --input-bg: #1E1E35;
    --shadow: 0 4px 24px rgba(0,0,0,0.4);
    --shadow-lg: 0 12px 40px rgba(0,0,0,0.5);
  }

  /* Layout */
  #app { max-width: 520px; margin: 0 auto; padding-bottom: 80px; position: relative; }

  /* Header */
  #header {
    background: var(--header-bg);
    padding: 18px 18px 14px;
    position: sticky; top: 0; z-index: 100;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }
  #header-inner { display: flex; align-items: center; justify-content: space-between; }
  #logo { font-weight: 900; font-size: 21px; color: var(--text); display: flex; align-items: center; gap: 8px; }
  #clock { font-size: 11px; color: var(--sub); margin-top: 3px; }
  #header-right { display: flex; gap: 8px; align-items: center; }
  #coin-display { background: var(--accent-bg); border-radius: 20px; padding: 5px 12px; font-size: 13px; font-weight: 800; color: #F59E0B; }
  .sync-btn { background: var(--card); border: 1.5px solid var(--border); border-radius: 20px; padding: 5px 12px; font-size: 12px; font-weight: 700; color: var(--sub); cursor: pointer; transition: all 0.2s; }
  .sync-btn:hover { border-color: var(--accent); color: var(--accent); }
  .sync-btn.syncing { color: var(--warn); border-color: var(--warn); animation: pulse 1s infinite; }
  .sync-btn.synced  { color: var(--success); border-color: var(--success); }
  #theme-btn { background: var(--accent-bg); border: none; border-radius: 20px; padding: 6px 12px; color: var(--accent); font-weight: 700; cursor: pointer; font-size: 12px; font-family: inherit; }

  /* Bottom nav */
  #nav {
    position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
    width: 100%; max-width: 520px;
    background: var(--nav-bg);
    backdrop-filter: blur(24px);
    border-top: 1px solid var(--border);
    display: flex; z-index: 200;
  }
  .nav-btn {
    flex: 1; padding: 11px 2px 9px; border: none; background: transparent;
    cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px;
    color: var(--sub); font-weight: 500; transition: all 0.18s;
    border-top: 2px solid transparent; font-family: inherit;
  }
  .nav-btn.active { color: var(--accent); font-weight: 900; border-top-color: var(--accent); }
  .nav-btn span:first-child { font-size: 17px; }
  .nav-btn span:last-child  { font-size: 9px; }

  /* Views */
  .view { padding: 16px 16px 0; animation: slideUp 0.3s ease; display: none; }
  .view.active { display: block; }

  /* Cards */
  .card {
    background: var(--card); border-radius: 18px; padding: 16px 18px;
    border: 1px solid var(--border); box-shadow: var(--shadow); margin-bottom: 14px;
  }
  .card-title { font-weight: 900; font-size: 16px; color: var(--text); margin-bottom: 4px; }
  .card-sub   { font-size: 12px; color: var(--sub); }

  /* Buttons */
  .btn { border: none; border-radius: 10px; padding: 9px 18px; font-weight: 700; cursor: pointer; font-size: 13px; font-family: inherit; transition: all 0.15s; }
  .btn:active { transform: scale(0.95); }
  .btn-primary   { background: var(--accent); color: #fff; }
  .btn-secondary { background: #9CA3AF; color: #fff; }
  .btn-outline   { background: transparent; border: 1.5px solid var(--accent); color: var(--accent); }
  .btn-danger    { background: rgba(220,38,38,0.12); color: var(--danger); }
  .btn-success   { background: rgba(22,163,74,0.12);  color: var(--success); }
  .btn-wide      { width: 100%; padding: 13px; font-size: 15px; border-radius: 16px; }

  /* Inputs */
  input, select, textarea {
    background: var(--input-bg); border: 1.5px solid rgba(108,71,255,0.25);
    border-radius: 10px; padding: 9px 12px; color: var(--text);
    font-size: 13px; font-family: inherit; outline: none; width: 100%;
    transition: border-color 0.2s;
  }
  input:focus, select:focus { border-color: var(--accent); }
  input[type=date]::-webkit-calendar-picker-indicator,
  input[type=time]::-webkit-calendar-picker-indicator { filter: var(--cal-filter, none); }
  body.dark input[type=date]::-webkit-calendar-picker-indicator,
  body.dark input[type=time]::-webkit-calendar-picker-indicator { filter: invert(1); }

  /* Label */
  .label { font-size: 12px; color: var(--sub); font-weight: 700; margin-bottom: 5px; display: block; }

  /* Score ring */
  .ring-wrap { flex-shrink: 0; }

  /* Habit card */
  .habit-card {
    border-radius: 16px; padding: 13px 15px; margin-bottom: 9px;
    border: 1.5px solid transparent; transition: all 0.2s; cursor: pointer;
    position: relative; overflow: hidden;
  }
  .habit-card.done   { border-color: var(--cat-accent, var(--accent)); box-shadow: 0 2px 12px rgba(108,71,255,0.12); }
  .habit-card.skipped{ opacity: 0.6; }
  .habit-card.not-due{ opacity: 0.4; cursor: default; pointer-events: none; }
  .habit-card-top    { display: flex; align-items: center; gap: 12px; }
  .habit-icon        { font-size: 24px; min-width: 32px; text-align: center; line-height: 1; }
  .habit-info        { flex: 1; min-width: 0; }
  .habit-name        { font-weight: 800; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .habit-sub         { font-size: 11px; color: rgba(0,0,0,0.4); margin-top: 2px; }
  body.dark .habit-sub { color: rgba(255,255,255,0.4); }
  .habit-badges      { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
  .badge { border-radius: 20px; padding: 2px 8px; font-size: 11px; font-weight: 800; }
  .badge-streak  { background: var(--cat-accent, var(--accent)); color: #fff; }
  .badge-done    { background: rgba(22,163,74,0.2); color: var(--success); }
  .badge-skip    { background: rgba(220,38,38,0.2); color: var(--danger); }
  .badge-empty   { width: 22px; height: 22px; border-radius: 50%; border: 2px dashed var(--cat-accent, var(--accent)); opacity: 0.5; }
  .streak-bar    { margin-top: 9px; }
  .streak-bar-bg { height: 3px; border-radius: 2px; background: rgba(0,0,0,0.07); }
  body.dark .streak-bar-bg { background: rgba(255,255,255,0.08); }
  .streak-bar-fill { height: 100%; border-radius: 2px; background: var(--cat-accent, var(--accent)); transition: width 0.8s ease; }
  .streak-bar-label { font-size: 10px; color: rgba(0,0,0,0.3); margin-top: 3px; }
  body.dark .streak-bar-label { color: rgba(255,255,255,0.3); }
  .habit-log-form { margin-top: 13px; padding-top: 13px; border-top: 1px solid rgba(108,71,255,0.15); display: flex; gap: 8px; align-items: center; }

  /* Category section */
  .cat-section { margin-bottom: 20px; }
  .cat-header  { display: flex; align-items: center; gap: 7px; margin-bottom: 9px; }
  .cat-label   { font-weight: 800; color: var(--sub); font-size: 11px; text-transform: uppercase; letter-spacing: 1.2px; }

  /* Category filter pills */
  #cat-pills   { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 14px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
  #cat-pills::-webkit-scrollbar { display: none; }
  .cat-pill    { flex-shrink: 0; padding: 5px 12px; border-radius: 20px; border: 1.5px solid var(--border); background: transparent; color: var(--sub); font-weight: 500; font-size: 12px; cursor: pointer; transition: all 0.15s; font-family: inherit; }
  .cat-pill.active { border-color: var(--accent); background: var(--accent-bg); color: var(--accent); font-weight: 800; }

  /* Score ring SVG */
  .score-ring { transform: rotate(-90deg); }

  /* Heatmap */
  .heatmap { display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; }
  .heat-cell { aspect-ratio: 1; border-radius: 7px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; color: rgba(255,255,255,0.9); transition: transform 0.1s; }
  .heat-cell:hover { transform: scale(1.12); }
  .heat-cell.empty { background: var(--border); color: var(--sub); }
  .heat-cell.low   { background: var(--danger); }
  .heat-cell.mid   { background: var(--warn); }
  .heat-cell.good  { background: var(--success); }

  /* Body tracker */
  .body-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .body-field { background: var(--card); border-radius: 14px; padding: 12px 13px; border: 1px solid var(--border); }
  .body-field-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .body-field-label  { font-size: 11px; color: var(--sub); font-weight: 700; }
  .body-trend        { font-size: 14px; font-weight: 800; }
  .trend-up-bad   { color: var(--danger); }
  .trend-down-good{ color: var(--success); }
  .trend-up-good  { color: var(--success); }
  .trend-neutral  { color: var(--sub); }
  .body-input-row { display: flex; align-items: center; gap: 4px; }
  .body-input-row input { font-size: 15px; font-weight: 700; padding: 7px 8px; }
  .body-unit { font-size: 11px; color: var(--sub); flex-shrink: 0; }
  .bmi-card { text-align: center; background: var(--card); border-radius: 14px; padding: 12px 16px; border: 1.5px solid; box-shadow: var(--shadow); }
  .bmi-val  { font-weight: 900; font-size: 26px; }
  .bmi-lbl  { font-size: 10px; font-weight: 700; }
  .bmi-cat  { font-size: 10px; color: var(--sub); margin-top: 2px; }

  /* History table */
  .hist-table { width: 100%; border-collapse: collapse; font-size: 11px; }
  .hist-table th { padding: 6px 8px; text-align: left; white-space: nowrap; border-bottom: 1px solid var(--border); color: var(--sub); font-weight: 700; }
  .hist-table td { padding: 6px 8px; white-space: nowrap; border-bottom: 1px solid var(--border); color: var(--text); }

  /* Rewards */
  .reward-card { background: var(--card); border: 1.5px solid var(--border); border-radius: 16px; padding: 15px 16px; margin-bottom: 10px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
  .reward-card.earned { border-color: var(--success); background: rgba(22,163,74,0.06); box-shadow: 0 2px 12px rgba(22,163,74,0.12); }
  .reward-emoji  { font-size: 30px; line-height: 1; flex-shrink: 0; }
  .reward-text   { flex: 1; font-weight: 800; color: var(--text); font-size: 14px; line-height: 1.4; }
  .reward-sub    { font-size: 11px; color: var(--sub); margin-top: 3px; }
  .reward-badge  { border-radius: 20px; padding: 5px 12px; font-size: 12px; font-weight: 800; flex-shrink: 0; }
  .reward-badge.earned  { background: var(--success); color: #fff; }
  .reward-badge.reached { background: var(--accent-bg); color: var(--accent); }
  .reward-badge.locked  { background: var(--border); color: var(--sub); }

  /* Streak streak list */
  .streak-row { border-radius: 14px; padding: 13px 15px; margin-bottom: 9px; display: flex; align-items: center; gap: 12px; }
  .streak-row-name { font-weight: 800; font-size: 14px; }
  .streak-count { border-radius: 20px; padding: 5px 12px; font-weight: 900; font-size: 15px; color: #fff; flex-shrink: 0; }

  /* Manage */
  .manage-row { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 13px 14px; margin-bottom: 9px; display: flex; align-items: center; gap: 12px; }
  .manage-row-info { flex: 1; min-width: 0; }
  .manage-row-name { font-weight: 800; color: var(--text); font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .manage-row-sub  { color: var(--sub); font-size: 11px; margin-top: 2px; }
  .manage-row-actions { display: flex; gap: 6px; flex-shrink: 0; }

  /* Penalty panel */
  .penalty-panel { background: rgba(220,38,38,0.06); border-radius: 16px; padding: 16px; border: 1.5px solid rgba(220,38,38,0.25); }
  .penalty-title { font-weight: 800; color: var(--danger); margin-bottom: 10px; font-size: 15px; }
  .penalty-row   { display: flex; gap: 8px; margin-bottom: 8px; align-items: flex-start; font-size: 12px; }
  .penalty-key   { font-weight: 700; color: var(--text); flex-shrink: 0; }
  .penalty-val   { color: var(--sub); }

  /* Toast */
  #toast {
    position: fixed; bottom: 96px; left: 50%; transform: translateX(-50%);
    border-radius: 24px; padding: 11px 22px; font-weight: 800; font-size: 13px;
    z-index: 9000; max-width: 320px; text-align: center; color: #fff;
    box-shadow: 0 6px 24px rgba(0,0,0,0.25); pointer-events: none;
    animation: slideUp 0.25s ease; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    display: none;
  }

  /* Celebration modal */
  #modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.72); z-index: 9998;
    display: none; align-items: center; justify-content: center; padding: 20px;
  }
  #modal-overlay.open { display: flex; }
  #modal-box { background: var(--card); border-radius: 28px; padding: 28px; max-width: 330px; width: 100%; text-align: center; animation: slideUp 0.4s ease; box-shadow: 0 24px 70px rgba(0,0,0,0.4); }
  #modal-emoji  { font-size: 64px; line-height: 1; margin-bottom: 14px; animation: pulse 0.8s infinite; }
  #modal-title  { font-weight: 900; font-size: 24px; color: var(--text); margin-bottom: 6px; }
  #modal-habit  { color: var(--sub); font-size: 13px; margin-bottom: 16px; }
  #modal-reward { background: var(--accent-bg); border-radius: 16px; padding: 16px 18px; margin-bottom: 14px; color: var(--text); font-weight: 800; line-height: 1.6; font-size: 15px; }
  #modal-coins  { font-weight: 900; font-size: 20px; color: #F59E0B; margin-bottom: 18px; }
  #modal-claim  { background: var(--accent); color: #fff; border: none; border-radius: 16px; padding: 14px; width: 100%; font-size: 16px; font-weight: 800; cursor: pointer; font-family: inherit; }
  #modal-claim:active { transform: scale(0.97); }

  /* Settings sheet */
  #settings-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 9997;
    display: none; align-items: flex-end; justify-content: center;
  }
  #settings-overlay.open { display: flex; }
  #settings-sheet {
    background: var(--card); border-radius: 24px 24px 0 0; padding: 24px 20px 40px;
    width: 100%; max-width: 520px; animation: slideUp 0.3s ease;
    max-height: 85vh; overflow-y: auto;
  }
  #settings-url { word-break: break-all; font-size: 11px; color: var(--sub); margin-top: 6px; padding: 8px; background: var(--input-bg); border-radius: 8px; }

  /* Confetti */
  .confetti-piece { position: fixed; top: -12px; width: 10px; height: 10px; border-radius: 3px; z-index: 9999; pointer-events: none; animation: fall 2.2s ease-in forwards; }
  @keyframes fall { to { transform: translateY(110vh) rotate(720deg); opacity: 0; } }
  @keyframes slideUp { from { transform: translateY(18px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  @keyframes pulse   { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
  @keyframes shimmer { 0%,100% { opacity: 0.7; } 50% { opacity: 1; } }
  @keyframes spin    { to { transform: rotate(360deg); } }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 3px; height: 3px; }
  ::-webkit-scrollbar-thumb { background: rgba(156,163,175,0.3); border-radius: 4px; }

  /* Quote banner */
  #quote-banner { background: var(--accent-bg); border-radius: 14px; padding: 12px 16px; margin-bottom: 16px; border-left: 3px solid var(--accent); font-size: 12px; color: var(--accent); font-style: italic; }

  /* Form groups in add habit */
  .form-row { margin-bottom: 13px; }
  .form-row-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 13px; }
  .add-form-box { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 18px; margin-bottom: 16px; box-shadow: var(--shadow); }

  /* Sync status bar */
  #sync-bar { font-size: 11px; padding: 4px 0 0; color: var(--sub); }

  /* Table scroll wrapper */
  .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }

  /* Empty state */
  .empty-state { text-align: center; padding: 40px 20px; color: var(--sub); }
  .empty-state .empty-icon { font-size: 42px; margin-bottom: 10px; }
  .empty-state .empty-msg  { font-weight: 700; font-size: 14px; }

  /* Section heading */
  h3.section-title { font-weight: 900; font-size: 18px; color: var(--text); margin-bottom: 14px; }
  h4.section-sub   { font-weight: 800; font-size: 14px; color: var(--text); margin-bottom: 11px; }

  /* Date picker row */
  #date-row { display: flex; gap: 8px; align-items: center; margin-bottom: 16px; }
  #date-row label { color: var(--sub); font-size: 12px; flex-shrink: 0; }
  #date-row input { flex: 1; }
  #date-today-btn { flex-shrink: 0; }

  /* Progress summary row */
  #today-summary { background: var(--card); border-radius: 20px; padding: 16px 18px; margin-bottom: 18px; display: flex; align-items: center; gap: 16px; box-shadow: var(--shadow); border: 1px solid var(--border); }
  #today-summary-right { flex: 1; }
  #today-greeting   { font-weight: 900; font-size: 17px; color: var(--text); line-height: 1.3; }
  #today-datestr    { color: var(--sub); font-size: 12px; margin-top: 4px; }
  #today-progress   { color: var(--accent); font-size: 12px; font-weight: 700; margin-top: 4px; }
</style>
</head>
<body>
<div id="app">

  <!-- HEADER -->
  <div id="header">
    <div id="header-inner">
      <div>
        <div id="logo"><span id="logo-icon" style="animation:shimmer 3s infinite">☀️</span> HabitFlow</div>
        <div id="clock"></div>
      </div>
      <div id="header-right">
        <div id="coin-display">0 🪙</div>
        <button class="sync-btn" id="sync-btn" onclick="manualSync()" title="Sync with Google Sheets">☁️ Sync</button>
        <button id="theme-btn" onclick="toggleTheme()">🌙</button>
      </div>
    </div>
    <div id="sync-bar">Not synced yet — tap ☁️ Sync to connect Google Sheets</div>
  </div>

  <!-- TODAY VIEW -->
  <div class="view active" id="view-today">
    <div id="today-summary">
      <svg class="score-ring ring-wrap" id="score-ring-svg" width="72" height="72">
        <circle cx="36" cy="36" r="32" fill="none" stroke="var(--border)" stroke-width="7"/>
        <circle cx="36" cy="36" r="32" fill="none" stroke="var(--success)" stroke-width="7"
          stroke-dasharray="0 201" stroke-linecap="round"
          id="ring-fill" style="transition:stroke-dasharray 1s ease"/>
        <text x="36" y="36" text-anchor="middle" dominant-baseline="middle"
          style="transform:rotate(90deg);transform-origin:36px 36px;fill:var(--success);font-size:13px;font-weight:800;font-family:Nunito,sans-serif"
          id="ring-text">0%</text>
      </svg>
      <div id="today-summary-right">
        <div id="today-greeting">✨ Let's begin!</div>
        <div id="today-datestr"></div>
        <div id="today-progress">0/0 done · 0 🪙</div>
      </div>
    </div>

    <div id="quote-banner">"You're building the life you deserve 🌟"</div>

    <div id="date-row">
      <label>📅 Logging for:</label>
      <input type="date" id="date-picker" onchange="onDateChange()">
      <button class="btn btn-outline btn-date-today" id="date-today-btn" onclick="goToToday()" style="display:none;padding:7px 12px;font-size:12px">Today</button>
    </div>

    <div id="cat-pills"></div>
    <div id="habits-list"></div>
  </div>

  <!-- BODY VIEW -->
  <div class="view" id="view-body">
    <h3 class="section-title">🫀 Body Tracker</h3>
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;gap:12px">
      <p style="color:var(--sub);font-size:13px;flex:1">Log today's measurements. BMI is calculated automatically.</p>
      <div class="bmi-card" id="bmi-card" style="display:none">
        <div class="bmi-val" id="bmi-val">–</div>
        <div class="bmi-lbl" id="bmi-lbl">BMI</div>
        <div class="bmi-cat" id="bmi-cat"></div>
      </div>
    </div>

    <div class="card" style="margin-bottom:12px">
      <label class="label">📏 Your Height (cm) — saved permanently</label>
      <input type="number" id="height-input" placeholder="e.g. 162" oninput="onHeightChange()">
    </div>

    <div class="body-grid" id="body-fields"></div>

    <button class="btn btn-primary btn-wide" onclick="saveBodyStats()" style="margin-bottom:20px">💾 Save Today's Stats</button>

    <h4 class="section-sub">📈 Recent History</h4>
    <div class="table-scroll">
      <table class="hist-table" id="body-hist-table">
        <thead><tr>
          <th>Date</th><th>Wt</th><th>BMI</th><th>Hyd%</th><th>Pro</th><th>Visc</th><th>Hip</th><th>Waist</th><th>Arm</th>
        </tr></thead>
        <tbody id="body-hist-body"></tbody>
      </table>
    </div>
  </div>

  <!-- HISTORY VIEW -->
  <div class="view" id="view-history">
    <h3 class="section-title">📊 History &amp; Streaks</h3>

    <div class="card">
      <div class="card-title">Last 21 Days</div>
      <div style="margin-top:12px" id="heatmap" class="heatmap"></div>
      <div style="display:flex;gap:14px;margin-top:12px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:5px"><div style="width:12px;height:12px;border-radius:3px;background:var(--success)"></div><span style="font-size:10px;color:var(--sub)">≥80%</span></div>
        <div style="display:flex;align-items:center;gap:5px"><div style="width:12px;height:12px;border-radius:3px;background:var(--warn)"></div><span style="font-size:10px;color:var(--sub)">≥50%</span></div>
        <div style="display:flex;align-items:center;gap:5px"><div style="width:12px;height:12px;border-radius:3px;background:var(--danger)"></div><span style="font-size:10px;color:var(--sub)">&gt;0%</span></div>
        <div style="display:flex;align-items:center;gap:5px"><div style="width:12px;height:12px;border-radius:3px;background:var(--border)"></div><span style="font-size:10px;color:var(--sub)">None</span></div>
      </div>
    </div>

    <h4 class="section-sub">🔥 Active Streaks</h4>
    <div id="streak-list"></div>
  </div>

  <!-- REWARDS VIEW -->
  <div class="view" id="view-rewards">
    <div class="card" style="margin-bottom:20px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><div class="card-title">🏆 Your Coins</div><div class="card-sub">Earned through streaks</div></div>
        <div style="text-align:right">
          <div style="font-weight:900;font-size:28px;color:#F59E0B" id="coins-big">0 🪙</div>
          <div style="font-size:11px;color:var(--sub)" id="best-streak-label">Best streak: 0d</div>
        </div>
      </div>
    </div>

    <h4 class="section-sub">🎯 Streak Milestones</h4>
    <p style="color:var(--sub);font-size:12px;margin-bottom:16px">Any single habit reaching the streak — the reward is yours!</p>
    <div id="rewards-list"></div>

    <div class="penalty-panel" style="margin-top:8px">
      <div class="penalty-title">⚠️ Miss Penalty Rules</div>
      <div class="penalty-row"><span class="penalty-key">Miss 1 day:</span><span class="penalty-val">Streak paused — still recoverable</span></div>
      <div class="penalty-row"><span class="penalty-key">Miss 2 days in a row:</span><span class="penalty-val">❌ Streak RESETS to 0</span></div>
      <div class="penalty-row"><span class="penalty-key">Score &lt; 50%:</span><span class="penalty-val">Day counts as a miss</span></div>
      <div class="penalty-row"><span class="penalty-key">Time &gt; 15 min late:</span><span class="penalty-val">Score penalty applied</span></div>
      <div class="penalty-row"><span class="penalty-key">Duration &gt; +10 min:</span><span class="penalty-val">Score penalty applied</span></div>
      <div class="penalty-row"><span class="penalty-key">Duration &lt; −5 min:</span><span class="penalty-val">Partial score only</span></div>
    </div>
  </div>

  <!-- MANAGE VIEW -->
  <div class="view" id="view-manage">
    <h3 class="section-title">⚙️ Manage Habits</h3>
    <button class="btn btn-primary btn-wide" onclick="showAddForm()" style="margin-bottom:16px">+ Add New Habit</button>
    <div id="add-form-container"></div>
    <div id="manage-list"></div>
  </div>

</div><!-- #app -->

<!-- BOTTOM NAV -->
<div id="nav">
  <button class="nav-btn active" onclick="switchView('today',this)">  <span>✅</span><span>Today</span></button>
  <button class="nav-btn"        onclick="switchView('body',this)">   <span>🫀</span><span>Body</span></button>
  <button class="nav-btn"        onclick="switchView('history',this)"><span>📊</span><span>History</span></button>
  <button class="nav-btn"        onclick="switchView('rewards',this)"><span>🏆</span><span>Rewards</span></button>
  <button class="nav-btn"        onclick="switchView('manage',this)"> <span>⚙️</span><span>Manage</span></button>
  <button class="nav-btn"        onclick="openSettings()">            <span>🔧</span><span>Setup</span></button>
</div>

<!-- TOAST -->
<div id="toast"></div>

<!-- CELEBRATION MODAL -->
<div id="modal-overlay">
  <div id="modal-box">
    <div id="modal-emoji">🎉</div>
    <div id="modal-title">21-Day Streak!</div>
    <div id="modal-habit"></div>
    <div id="modal-reward"></div>
    <div id="modal-coins"></div>
    <button id="modal-claim" onclick="claimReward()">Claim Reward! 🎊</button>
  </div>
</div>

<!-- SETTINGS SHEET -->
<div id="settings-overlay" onclick="closeSettings(event)">
  <div id="settings-sheet" onclick="event.stopPropagation()">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <div style="font-weight:900;font-size:18px;color:var(--text)">🔧 Setup &amp; Settings</div>
      <button onclick="closeSettings()" style="background:var(--border);border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:16px">✕</button>
    </div>

    <div class="form-row">
      <label class="label">Google Apps Script Web App URL</label>
      <input type="url" id="script-url-input" placeholder="https://script.google.com/macros/s/…/exec"
        value="" oninput="onScriptUrlChange()">
      <div id="settings-url">Paste your deployed Apps Script URL here to enable sync.</div>
    </div>

    <button class="btn btn-primary btn-wide" onclick="testConnection()" style="margin-bottom:12px">🔌 Test Connection</button>
    <button class="btn btn-outline btn-wide" onclick="forcePush()"      style="margin-bottom:12px">⬆️ Push All Data to Sheets</button>
    <button class="btn btn-outline btn-wide" onclick="forcePull()"      style="margin-bottom:20px">⬇️ Pull Data from Sheets</button>

    <div style="background:var(--accent-bg);border-radius:14px;padding:16px;margin-bottom:16px">
      <div style="font-weight:800;color:var(--accent);margin-bottom:10px;font-size:14px">📋 One-time Google Setup (5 mins)</div>
      <ol style="padding-left:18px;color:var(--sub);font-size:12px;line-height:2">
        <li>Open your Google Sheet → <b>Extensions → Apps Script</b></li>
        <li>Delete any existing code, paste contents of <b>apps-script.js</b></li>
        <li>Click <b>Save</b> (💾), then <b>Deploy → New deployment</b></li>
        <li>Type: <b>Web app</b> · Execute as: <b>Me</b> · Who has access: <b>Anyone</b></li>
        <li>Click <b>Deploy</b>, copy the Web app URL</li>
        <li>Paste that URL in the field above and tap <b>Test Connection</b></li>
      </ol>
    </div>

    <div style="font-weight:800;color:var(--text);margin-bottom:10px">📱 Use on Phone &amp; Laptop</div>
    <p style="color:var(--sub);font-size:12px;line-height:1.8;margin-bottom:12px">
      Once the Apps Script URL is saved, both devices sync to the same Google Sheet automatically on every action.
      Save this <b>index.html</b> file to any folder on each device and open it in Chrome/Safari.
      On iPhone/Android: open in Safari/Chrome → Share → <b>Add to Home Screen</b> for an app icon.
    </p>

    <div style="font-weight:800;color:var(--text);margin-bottom:10px">🗑️ Danger Zone</div>
    <button class="btn btn-danger btn-wide" onclick="clearAllData()" style="margin-bottom:8px">Clear All Local Data</button>
  </div>
</div>

<script>
// ═══════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════
const LS = {
  get: (k, def) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch { return def; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

let habits       = LS.get('hf_habits',  null) || defaultHabits();
let logs         = LS.get('hf_logs',    {});
let streaks      = LS.get('hf_streaks', {});
let bodyLogs     = LS.get('hf_body',    {});
let coins        = LS.get('hf_coins',   0);
let claimed      = LS.get('hf_claimed', []);
let meta         = LS.get('hf_meta',    { heightCm: '', scriptUrl: '' });
let selectedDate = todayKey();
let activeCat    = 'all';
let pendingCelebration = null;
let isDark       = LS.get('hf_dark', !isDaytime());
let syncStatus   = 'idle'; // idle | syncing | ok | error

// ═══════════════════════════════════════════════════════════════════
// DEFAULT HABITS
// ═══════════════════════════════════════════════════════════════════
function defaultHabits() {
  return [
    {id:1, name:"Wake Up Early",       icon:"🌅", measure:"time",    target:"06:15", frequency:"everyday",        category:"morning"},
    {id:30,name:"Morning Meditation",  icon:"🧘", measure:"time",    target:"06:40", frequency:"everyday",        category:"morning"},
    {id:2, name:"Amla Juice",          icon:"🍈", measure:"boolean", target:null,    frequency:"everyday",        category:"morning"},
    {id:3, name:"Walking",             icon:"🚶", measure:"steps",   target:6000,    frequency:"everyday",        category:"fitness"},
    {id:13,name:"Thoppukarnam",        icon:"🏋️", measure:"reps",    target:250,     frequency:"everyday",        category:"fitness"},
    {id:25,name:"Night Walk",          icon:"🌃", measure:"steps",   target:6000,    frequency:"everyday",        category:"fitness"},
    {id:4, name:"Water",               icon:"💧", measure:"litres",  target:3,       frequency:"everyday",        category:"health"},
    {id:16,name:"Breakfast",           icon:"🍳", measure:"time",    target:"10:00", frequency:"everyday",        category:"health"},
    {id:17,name:"Tea",                 icon:"☕", measure:"time",    target:"11:00", frequency:"everyday",        category:"health"},
    {id:18,name:"Lunch & Dinner",      icon:"🍱", measure:"time",    target:"12:30", frequency:"everyday",        category:"health"},
    {id:20,name:"Water Tea",           icon:"🫖", measure:"duration",target:10,      frequency:"everyday",        category:"health"},
    {id:11,name:"Lamp Morning",        icon:"🪔", measure:"time",    target:"09:00", frequency:"everyday",        category:"spiritual"},
    {id:12,name:"Prayer",              icon:"🙏", measure:"duration",target:20,      frequency:"everyday",        category:"spiritual"},
    {id:14,name:"Buddha Lamp",         icon:"☮️", measure:"boolean", target:null,    frequency:"everyday",        category:"spiritual"},
    {id:15,name:"Agarbathi/Sambrani",  icon:"🕯️", measure:"boolean", target:null,    frequency:"everyday",        category:"spiritual"},
    {id:21,name:"Evening Lamp",        icon:"🌙", measure:"time",    target:"18:00", frequency:"everyday",        category:"spiritual"},
    {id:5, name:"Sweep",               icon:"🧹", measure:"boolean", target:null,    frequency:"everyday",        category:"home"},
    {id:6, name:"Dust",                icon:"🪣", measure:"boolean", target:null,    frequency:"alternate",       category:"home"},
    {id:7, name:"Toilet Cleaning",     icon:"🚽", measure:"boolean", target:null,    frequency:"3days",           category:"home"},
    {id:8, name:"Mop",                 icon:"🧽", measure:"boolean", target:null,    frequency:"mon,wed,fri,sun", category:"home"},
    {id:9, name:"Wash Clothes",        icon:"👕", measure:"boolean", target:null,    frequency:"mon,wed,fri,sun", category:"home"},
    {id:26,name:"Utensils In",         icon:"🍽️", measure:"time",    target:"22:00", frequency:"everyday",        category:"home"},
    {id:27,name:"Kitchen Clean",       icon:"🧼", measure:"time",    target:"22:15", frequency:"everyday",        category:"home"},
    {id:29,name:"Things Back to Place",icon:"📦", measure:"duration",target:10,      frequency:"everyday",        category:"home"},
    {id:10,name:"Hair Mask",           icon:"💆", measure:"boolean", target:null,    frequency:"mon,wed,fri,sun", category:"selfcare"},
    {id:28,name:"Read Book/Paint",     icon:"🎨", measure:"duration",target:30,      frequency:"everyday",        category:"selfcare"},
    {id:19,name:"Korean",              icon:"🇰🇷",measure:"duration",target:30,      frequency:"everyday",        category:"learning"},
    {id:22,name:"Tamil",               icon:"📖", measure:"duration",target:15,      frequency:"everyday",        category:"learning"},
    {id:23,name:"German",              icon:"🇩🇪",measure:"duration",target:15,      frequency:"everyday",        category:"learning"},
    {id:31,name:"Certificate/Course",  icon:"🎓", measure:"duration",target:30,      frequency:"mon,wed,fri",     category:"learning"},
    {id:32,name:"Write an Article",    icon:"✍️", measure:"boolean", target:null,    frequency:"weekly",          category:"learning"},
    {id:24,name:"Groww",               icon:"📈", measure:"duration",target:15,      frequency:"everyday",        category:"finance"},
    {id:33,name:"Water Plants",        icon:"🌿", measure:"boolean", target:null,    frequency:"everyday",        category:"plants"},
    {id:34,name:"Prune Plants",        icon:"✂️", measure:"boolean", target:null,    frequency:"weekly",          category:"plants"},
    {id:35,name:"Bake",                icon:"🍞", measure:"boolean", target:null,    frequency:"weekly",          category:"food"},
  ];
}

// ═══════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const CAT_COLORS = {
  morning: {light:"#FFF3E0",dark:"#3D1F00",accent:"#FF8C42"},
  fitness: {light:"#E8F5E9",dark:"#1B3A1B",accent:"#43A047"},
  health:  {light:"#E3F2FD",dark:"#0D2A47",accent:"#1E88E5"},
  home:    {light:"#FFF8E1",dark:"#3D2800",accent:"#FFB300"},
  selfcare:{light:"#FCE4EC",dark:"#3D0018",accent:"#E91E63"},
  spiritual:{light:"#EDE7F6",dark:"#1E0047",accent:"#7E57C2"},
  learning:{light:"#E0F7FA",dark:"#003340",accent:"#00ACC1"},
  finance: {light:"#F1F8E9",dark:"#1A3300",accent:"#7CB342"},
  plants:  {light:"#E8F5E9",dark:"#0A2E0A",accent:"#2E7D32"},
  food:    {light:"#FBE9E7",dark:"#3E1A10",accent:"#E64A19"},
};
const CAT_ICONS = {morning:"🌤",fitness:"💪",health:"💚",home:"🏠",selfcare:"✨",spiritual:"🕊️",learning:"🧠",finance:"💰",plants:"🌱",food:"🍽️"};

const STREAK_REWARDS = [
  {days:5,  reward:"🍦 Treat yourself to an ice cream or kulfi!",          emoji:"🍦", coins:50},
  {days:7,  reward:"🎬 Movie night — pick your absolute favourite film!",   emoji:"🎬", coins:100},
  {days:12, reward:"☕ Visit that cosy café you've been eyeing!",           emoji:"☕", coins:150},
  {days:18, reward:"🛍️ Buy something you've been wanting (₹200 budget)!",  emoji:"🛍️", coins:250},
  {days:21, reward:"🍽️ Treat yourself to a nice restaurant meal!",         emoji:"🍽️", coins:350},
  {days:28, reward:"💆 Book a spa or head-massage session!",                emoji:"💆", coins:500},
  {days:36, reward:"📚 Buy a book or art supply you've been eyeing!",       emoji:"📚", coins:700},
  {days:45, reward:"🎁 Shopping spree — ₹1000 just for YOU!",              emoji:"🎁", coins:900},
  {days:53, reward:"🌿 Day trip to a peaceful nature spot!",                emoji:"🌿", coins:1100},
  {days:60, reward:"🎊 Grand dinner with someone you love!",                emoji:"🎊", coins:1400},
  {days:70, reward:"🏖️ Plan a short weekend getaway!",                     emoji:"🏖️", coins:1800},
  {days:80, reward:"💎 Buy a meaningful piece of jewellery!",               emoji:"💎", coins:2200},
  {days:90, reward:"✈️ Plan your dream trip — you have EARNED it!",        emoji:"✈️", coins:3000},
];

const MOTIVATIONAL = [
  "You're building the life you deserve 🌟",
  "Small steps, giant leaps 🚀",
  "Consistency is the secret sauce 🍯",
  "Your future self is cheering for you! 🎉",
  "Every habit done is a vote for who you're becoming ✨",
  "Progress, not perfection 💫",
  "The best time was yesterday. Next best: right now 🔥",
];

const PENALTY_MSGS = [
  "Streak reset — but every master was once a beginner 💪",
  "Counter to zero. The comeback is always stronger! ⚡",
  "Reset! This is where the new streak begins 🔥",
];

// ═══════════════════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════════════════
function todayKey() { return new Date().toISOString().split('T')[0]; }
function dateKey(d) { return d.toISOString().split('T')[0]; }
function isDaytime() { const h = new Date().getHours(); return h >= 6 && h < 19; }
function save() {
  LS.set('hf_habits',  habits);
  LS.set('hf_logs',    logs);
  LS.set('hf_streaks', streaks);
  LS.set('hf_body',    bodyLogs);
  LS.set('hf_coins',   coins);
  LS.set('hf_claimed', claimed);
  LS.set('hf_meta',    meta);
}

function isHabitDueOn(habit, dateStr) {
  const d   = new Date(dateStr + 'T00:00:00');
  const dow = d.getDay();
  const f   = habit.frequency;
  if (f === 'everyday') return true;
  if (f === 'weekly')   return dow === 0;
  if (f === 'alternate') {
    const ref  = new Date('2025-01-01');
    const diff = Math.floor((d - ref) / 86400000);
    return diff % 2 === 0;
  }
  if (f === '3days') {
    const ref  = new Date('2025-01-01');
    const diff = Math.floor((d - ref) / 86400000);
    return diff % 3 === 0;
  }
  if (f.includes(',')) {
    const dm = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
    return f.split(',').map(x => dm[x.trim()]).includes(dow);
  }
  return true;
}

function scoreEntry(habit, value) {
  if (!value || value.skipped) return 0;
  if (habit.measure === 'boolean')  return value.done ? 100 : 0;
  if (habit.measure === 'reps')     return Math.min(Math.round((value.reps  / (habit.target||1)) * 100), 100);
  if (habit.measure === 'steps')    return Math.min(Math.round((value.steps / (habit.target||1)) * 100), 100);
  if (habit.measure === 'litres')   return Math.min(Math.round((value.litres/ (habit.target||1)) * 100), 100);
  if (habit.measure === 'duration') {
    if (!value.minutes) return 0;
    const diff = value.minutes - habit.target;
    if (diff >= -5 && diff <= 10) return 100;
    if (diff < -5) return Math.max(0, Math.round((value.minutes / habit.target) * 100));
    return Math.max(0, 100 - Math.round((diff - 10) * 5));
  }
  if (habit.measure === 'time') {
    if (!value.time) return 0;
    const [th,tm] = habit.target.split(':').map(Number);
    const [vh,vm] = value.time.split(':').map(Number);
    const diff = (vh*60+vm) - (th*60+tm);
    if (diff <= 0)  return 100;
    if (diff <= 15) return 80;
    return Math.max(0, 80 - (diff-15)*3);
  }
  return 0;
}

function getDayScore(dateStr) {
  const due = habits.filter(h => isHabitDueOn(h, dateStr));
  if (!due.length) return 0;
  const total = due.reduce((s, h) => s + scoreEntry(h, logs[dateStr]?.[h.id]), 0);
  return Math.round(total / due.length);
}

function calcBMI(wt, htCm) {
  if (!wt || !htCm) return null;
  const h = htCm / 100;
  return +((wt / (h*h)).toFixed(1));
}
function bmiCat(bmi) {
  if (!bmi) return '';
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25)   return 'Healthy ✓';
  if (bmi < 30)   return 'Overweight';
  return 'Obese';
}
function bmiColor(bmi) {
  if (!bmi) return 'var(--sub)';
  if (bmi < 18.5 || bmi >= 30) return 'var(--danger)';
  if (bmi < 25)  return 'var(--success)';
  return 'var(--warn)';
}

function checkStreakReset(habitId) {
  const d1 = new Date(); d1.setDate(d1.getDate()-1);
  const d2 = new Date(); d2.setDate(d2.getDate()-2);
  const k1 = dateKey(d1), k2 = dateKey(d2);
  const h = habits.find(x => x.id === habitId);
  const m1 = !logs[k1]?.[habitId] || scoreEntry(h, logs[k1][habitId]) < 50;
  const m2 = !logs[k2]?.[habitId] || scoreEntry(h, logs[k2][habitId]) < 50;
  return m1 && m2;
}

// ═══════════════════════════════════════════════════════════════════
// LOGGING
// ═══════════════════════════════════════════════════════════════════
function logHabit(habitId, value) {
  const habit = habits.find(h => h.id === habitId);
  if (!habit) return;
  const score   = scoreEntry(habit, value);
  const isToday = selectedDate === todayKey();

  if (!logs[selectedDate]) logs[selectedDate] = {};
  logs[selectedDate][habitId] = value;
  save();

  const reset = checkStreakReset(habitId);
  if (reset && score < 50) {
    streaks[habitId] = 0;
    save();
    showToast(PENALTY_MSGS[Math.floor(Math.random()*PENALTY_MSGS.length)], 'warn');
  } else if (score >= 50 && isToday) {
    const cur  = streaks[habitId] || 0;
    const next = cur + 1;
    streaks[habitId] = next;
    save();
    const milestone = STREAK_REWARDS.find(r => r.days === next && !claimed.includes(`${habitId}-${r.days}`));
    if (milestone) {
      pendingCelebration = { habit, milestone };
      setTimeout(() => showCelebration(), 300);
    } else if (score === 100) {
      showToast(`✨ Perfect! ${habit.name} done!`, 'success');
    } else if (score >= 80) {
      showToast(`👍 Great — ${habit.name} (${score}%)`, 'success');
    }
  } else if (score >= 50) {
    showToast(`📝 Logged ${habit.name} for ${selectedDate}`, 'success');
  }

  renderToday();
  renderRewards();
  renderHistory();
  syncToSheets();
}

// ═══════════════════════════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════════════════════════
function applyTheme() {
  document.body.classList.toggle('dark', isDark);
  document.getElementById('theme-btn').textContent = isDark ? '☀️' : '🌙';
  document.getElementById('logo-icon').textContent  = isDark ? '🌙' : '☀️';
}
function toggleTheme() { isDark = !isDark; LS.set('hf_dark', isDark); applyTheme(); }

// ═══════════════════════════════════════════════════════════════════
// CLOCK
// ═══════════════════════════════════════════════════════════════════
function updateClock() {
  document.getElementById('clock').textContent =
    new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
  const nowDark = !isDaytime();
  if (nowDark !== isDark) { isDark = nowDark; LS.set('hf_dark', isDark); applyTheme(); }
}

// ═══════════════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════════════
let toastTimer = null;
function showToast(msg, type='info') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.style.background = type === 'success' ? 'var(--success)' : type === 'warn' ? 'var(--warn)' : 'var(--accent)';
  el.style.display = 'block';
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.style.display='none'; }, 3500);
}

// ═══════════════════════════════════════════════════════════════════
// CELEBRATION
// ═══════════════════════════════════════════════════════════════════
function showCelebration() {
  if (!pendingCelebration) return;
  const { habit, milestone } = pendingCelebration;
  document.getElementById('modal-emoji').textContent  = milestone.emoji;
  document.getElementById('modal-title').textContent  = `🎉 ${milestone.days}-Day Streak!`;
  document.getElementById('modal-habit').textContent  = `${habit.icon} ${habit.name}`;
  document.getElementById('modal-reward').textContent = milestone.reward;
  document.getElementById('modal-coins').textContent  = `+${milestone.coins} 🪙 coins!`;
  document.getElementById('modal-overlay').classList.add('open');
  fireConfetti();
}
function claimReward() {
  if (!pendingCelebration) return;
  const { habit, milestone } = pendingCelebration;
  coins += milestone.coins;
  claimed.push(`${habit.id}-${milestone.days}`);
  save();
  pendingCelebration = null;
  document.getElementById('modal-overlay').classList.remove('open');
  showToast(`🎊 +${milestone.coins} coins added!`, 'success');
  updateCoinDisplay();
  renderRewards();
  syncToSheets();
}

function fireConfetti() {
  const colors = ['#FFB347','#87CEEB','#98FB98','#DDA0DD','#F0E68C','#FF9999','#B0E0E6'];
  for (let i = 0; i < 55; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `left:${Math.random()*100}vw;background:${colors[i%7]};animation-delay:${Math.random()*0.6}s;transform:rotate(${Math.random()*360}deg)`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

// ═══════════════════════════════════════════════════════════════════
// VIEW SWITCHING
// ═══════════════════════════════════════════════════════════════════
function switchView(name, btn) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  if (btn) btn.classList.add('active');
}

// ═══════════════════════════════════════════════════════════════════
// TODAY VIEW
// ═══════════════════════════════════════════════════════════════════
function renderToday() {
  const score   = getDayScore(selectedDate);
  const due     = habits.filter(h => isHabitDueOn(h, selectedDate));
  const done    = due.filter(h => logs[selectedDate]?.[h.id] && !logs[selectedDate][h.id].skipped);
  const circ    = 2 * Math.PI * 32;
  const fill    = (score/100) * circ;
  const col     = score >= 80 ? 'var(--success)' : score >= 50 ? 'var(--warn)' : score > 0 ? 'var(--danger)' : 'var(--border)';

  document.getElementById('ring-fill').setAttribute('stroke-dasharray', `${fill} ${circ}`);
  document.getElementById('ring-fill').setAttribute('stroke', col);
  document.getElementById('ring-text').textContent = score + '%';
  document.getElementById('ring-text').style.fill  = col;

  document.getElementById('today-greeting').textContent =
    score >= 85 ? '🌟 Stellar day!' : score >= 60 ? '💪 Keep it up!' : score > 0 ? '🌱 Growing!' : '✨ Let\'s begin!';
  document.getElementById('today-datestr').textContent =
    new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long' });
  document.getElementById('today-progress').textContent =
    `${done.length}/${due.length} done · ${coins} 🪙`;

  // Quote
  document.getElementById('quote-banner').textContent =
    '"' + MOTIVATIONAL[new Date().getDate() % MOTIVATIONAL.length] + '"';

  // Date picker
  document.getElementById('date-picker').value = selectedDate;
  document.getElementById('date-today-btn').style.display = selectedDate !== todayKey() ? '' : 'none';

  // Category pills
  const cats = ['all', ...Object.keys(CAT_ICONS)];
  document.getElementById('cat-pills').innerHTML = cats.map(c => `
    <button class="cat-pill${c===activeCat?' active':''}" onclick="setActiveCat('${c}')">
      ${c==='all'?'All':CAT_ICONS[c]+' '+c}
    </button>`).join('');

  // Habits list
  const filtered = due.filter(h => activeCat === 'all' || h.category === activeCat);
  const grouped  = {};
  filtered.forEach(h => { if (!grouped[h.category]) grouped[h.category]=[]; grouped[h.category].push(h); });

  let html = '';
  if (!filtered.length) {
    html = `<div class="empty-state"><div class="empty-icon">🎉</div><div class="empty-msg">No habits due here today!</div></div>`;
  }
  Object.entries(grouped).forEach(([cat, hs]) => {
    html += `<div class="cat-section">
      <div class="cat-header"><span>${CAT_ICONS[cat]||'•'}</span><span class="cat-label">${cat}</span></div>
      ${hs.map(h => habitCardHTML(h)).join('')}
    </div>`;
  });
  document.getElementById('habits-list').innerHTML = html;
}

function habitCardHTML(habit) {
  const entry  = logs[selectedDate]?.[habit.id];
  const score  = scoreEntry(habit, entry);
  const streak = streaks[habit.id] || 0;
  const cc     = CAT_COLORS[habit.category] || CAT_COLORS.health;
  const bg     = isDark ? cc.dark : cc.light;
  const accent = cc.accent;
  const done   = !!entry && !entry.skipped;
  const skipped= entry?.skipped;
  const nextM  = STREAK_REWARDS.find(r => r.days > streak);
  const pct    = nextM ? Math.min((streak/nextM.days)*100, 100) : 100;

  let cls = 'habit-card';
  if (done)    cls += ' done';
  if (skipped) cls += ' skipped';

  const targetDesc = habit.measure !== 'boolean' && habit.target
    ? `Target: ${habit.target} ${habit.measure}` : habit.frequency;

  let badge = '';
  if (streak > 0) badge += `<span class="badge badge-streak">🔥${streak}</span>`;
  if (done)       badge += `<span class="badge badge-done">✓${score}%</span>`;
  else if (skipped) badge += `<span class="badge badge-skip">✗ skip</span>`;
  else            badge += `<span class="badge-empty"></span>`;

  let streakBar = '';
  if (streak > 0 && nextM) {
    streakBar = `<div class="streak-bar">
      <div class="streak-bar-bg"><div class="streak-bar-fill" style="width:${pct}%;background:${accent}"></div></div>
      <div class="streak-bar-label">${nextM.days-streak} days to ${nextM.emoji}</div>
    </div>`;
  }

  const formId = `form-${habit.id}`;
  let logForm = `<div class="habit-log-form" id="${formId}" style="display:none" onclick="event.stopPropagation()">`;
  if (habit.measure === 'boolean') {
    logForm += `<button class="btn btn-success" onclick="submitLog(${habit.id},'boolean',true)">✓ Done</button>
                <button class="btn btn-secondary" onclick="submitLog(${habit.id},'skip',true)">✗ Skip</button>`;
  } else {
    const type   = habit.measure === 'time' ? 'time' : 'number';
    const step   = habit.measure === 'litres' ? '0.1' : '1';
    const ph     = habit.measure === 'time' ? 'HH:MM' : `Target: ${habit.target}`;
    logForm += `<input type="${type}" step="${step}" placeholder="${ph}" id="inp-${habit.id}"
                  style="flex:1;border-color:${accent}77" onkeydown="if(event.key==='Enter')submitLog(${habit.id},'${habit.measure}',false)">
                <button class="btn" style="background:${accent};color:#fff" onclick="submitLog(${habit.id},'${habit.measure}',false)">Log</button>`;
  }
  logForm += `</div>`;

  return `<div class="${cls}" style="background:${bg};--cat-accent:${accent}"
    onclick="toggleHabitForm(${habit.id})">
    <div class="habit-card-top">
      <div class="habit-icon">${habit.icon}</div>
      <div class="habit-info">
        <div class="habit-name" style="color:${isDark?accent:cc.dark}">${habit.name}</div>
        <div class="habit-sub">${targetDesc}</div>
      </div>
      <div class="habit-badges">${badge}</div>
    </div>
    ${streakBar}
    ${logForm}
  </div>`;
}

function toggleHabitForm(id) {
  const f = document.getElementById(`form-${id}`);
  if (!f) return;
  const isOpen = f.style.display !== 'none';
  // Close all
  document.querySelectorAll('.habit-log-form').forEach(el => el.style.display='none');
  if (!isOpen) f.style.display = 'flex';
}

function submitLog(habitId, measureType, isBoolean) {
  let value;
  if (isBoolean && measureType === 'boolean') {
    value = { done: true };
  } else if (measureType === 'skip') {
    value = { skipped: true };
  } else {
    const inp = document.getElementById(`inp-${habitId}`);
    if (!inp || !inp.value) { showToast('Please enter a value', 'warn'); return; }
    const v = inp.value;
    if (measureType === 'reps')     value = { reps:     parseInt(v) };
    else if (measureType === 'steps')    value = { steps:    parseInt(v) };
    else if (measureType === 'litres')   value = { litres:   parseFloat(v) };
    else if (measureType === 'duration') value = { minutes:  parseInt(v) };
    else if (measureType === 'time')     value = { time:     v };
    else value = { done: true };
  }
  logHabit(habitId, value);
}

function setActiveCat(cat) { activeCat = cat; renderToday(); }
function onDateChange()    { selectedDate = document.getElementById('date-picker').value; renderToday(); }
function goToToday()       { selectedDate = todayKey(); renderToday(); }

// ═══════════════════════════════════════════════════════════════════
// BODY TRACKER
// ═══════════════════════════════════════════════════════════════════
const BODY_FIELDS = [
  {key:'weight',   label:'Weight',       unit:'kg',  upGood:false},
  {key:'hydration',label:'Hydration',    unit:'%',   upGood:true},
  {key:'protein',  label:'Protein',      unit:'g',   upGood:true},
  {key:'visceral', label:'Visceral Fat', unit:'lvl', upGood:false},
  {key:'hip',      label:'Hip',          unit:'cm',  upGood:false},
  {key:'waist',    label:'Waist',        unit:'cm',  upGood:false},
  {key:'arm',      label:'Arm',          unit:'cm',  upGood:true},
];
const BODY_ICONS = {weight:'⚖️',hydration:'💧',protein:'🥩',visceral:'🫀',hip:'📏',waist:'📐',arm:'💪'};

function renderBody() {
  const today = todayKey();
  const hist  = Object.entries(bodyLogs).sort(([a],[b]) => a.localeCompare(b));
  const last  = hist[hist.length-1]?.[1];
  const prev  = hist[hist.length-2]?.[1];

  function trend(key) {
    if (!last?.[key] || !prev?.[key]) return null;
    const diff = parseFloat(last[key]) - parseFloat(prev[key]);
    if (Math.abs(diff) < 0.05) return '→';
    return diff < 0 ? '↓' : '↑';
  }
  function trendCls(key, upGood) {
    const t = trend(key);
    if (!t || t==='→') return 'trend-neutral';
    return (upGood ? t==='↑' : t==='↓') ? 'trend-down-good' : 'trend-up-bad';
  }

  const todayEntry = bodyLogs[today] || {};
  const htCm = parseFloat(meta.heightCm) || null;
  const bmi  = todayEntry.weight ? calcBMI(parseFloat(todayEntry.weight), htCm) : null;

  // BMI card
  if (bmi) {
    const bc = document.getElementById('bmi-card');
    bc.style.display='block';
    bc.style.borderColor = bmiColor(bmi);
    document.getElementById('bmi-val').style.color = bmiColor(bmi);
    document.getElementById('bmi-lbl').style.color = bmiColor(bmi);
    document.getElementById('bmi-val').textContent = bmi;
    document.getElementById('bmi-cat').textContent = bmiCat(bmi);
  }

  // Height input
  document.getElementById('height-input').value = meta.heightCm || '';

  // Fields grid
  document.getElementById('body-fields').innerHTML = BODY_FIELDS.map(f => {
    const t = trend(f.key);
    const tc = trendCls(f.key, f.upGood);
    return `<div class="body-field">
      <div class="body-field-header">
        <div class="body-field-label">${BODY_ICONS[f.key]} ${f.label}</div>
        ${t ? `<span class="body-trend ${tc}">${t}</span>` : ''}
      </div>
      <div class="body-input-row">
        <input type="number" step="${f.key==='weight'||f.key==='hip'||f.key==='waist'||f.key==='arm'?'0.1':'1'}"
          id="body-${f.key}" value="${todayEntry[f.key]||''}" placeholder="0"
          oninput="onBodyInput()">
        <span class="body-unit">${f.unit}</span>
      </div>
    </div>`;
  }).join('');

  // History table
  const rows = hist.slice(-7).reverse();
  document.getElementById('body-hist-body').innerHTML = rows.map(([dk, e]) =>
    `<tr>
      <td>${dk.slice(5)}</td>
      <td>${e.weight??'–'}</td><td>${e.bmi??'–'}</td>
      <td>${e.hydration??'–'}</td><td>${e.protein??'–'}</td>
      <td>${e.visceral??'–'}</td><td>${e.hip??'–'}</td>
      <td>${e.waist??'–'}</td><td>${e.arm??'–'}</td>
    </tr>`
  ).join('') || `<tr><td colspan="9" style="text-align:center;color:var(--sub);padding:20px">No data yet</td></tr>`;
}

function onHeightChange() {
  meta.heightCm = document.getElementById('height-input').value;
  LS.set('hf_meta', meta);
  onBodyInput();
}

function onBodyInput() {
  const htCm = parseFloat(meta.heightCm) || null;
  const wt   = parseFloat(document.getElementById('body-weight')?.value) || null;
  const bmi  = calcBMI(wt, htCm);
  if (bmi) {
    const bc = document.getElementById('bmi-card');
    bc.style.display='block';
    bc.style.borderColor = bmiColor(bmi);
    document.getElementById('bmi-val').style.color = bmiColor(bmi);
    document.getElementById('bmi-lbl').style.color = bmiColor(bmi);
    document.getElementById('bmi-val').textContent = bmi;
    document.getElementById('bmi-cat').textContent = bmiCat(bmi);
  }
}

function saveBodyStats() {
  const today  = todayKey();
  const htCm   = parseFloat(meta.heightCm) || null;
  const entry  = {};
  BODY_FIELDS.forEach(f => {
    const v = document.getElementById('body-' + f.key)?.value;
    if (v) entry[f.key] = v;
  });
  if (entry.weight) entry.bmi = calcBMI(parseFloat(entry.weight), htCm);
  entry.date = today;
  bodyLogs[today] = entry;
  save();
  showToast('✅ Body stats saved!', 'success');
  renderBody();
  syncToSheets();
}

// ═══════════════════════════════════════════════════════════════════
// HISTORY VIEW
// ═══════════════════════════════════════════════════════════════════
function renderHistory() {
  // Heatmap — 21 days
  const cells = [];
  for (let i = 20; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const dk    = dateKey(d);
    const score = getDayScore(dk);
    let cls = 'heat-cell';
    if (score >= 80) cls += ' good';
    else if (score >= 50) cls += ' mid';
    else if (score > 0)   cls += ' low';
    else cls += ' empty';
    cells.push(`<div class="${cls}" title="${dk}: ${score}%" onclick="jumpToDate('${dk}')">${d.getDate()}</div>`);
  }
  document.getElementById('heatmap').innerHTML = cells.join('');

  // Streak list
  const active = habits.filter(h => (streaks[h.id]||0) > 0)
    .sort((a,b) => (streaks[b.id]||0) - (streaks[a.id]||0));
  if (!active.length) {
    document.getElementById('streak-list').innerHTML =
      `<div class="empty-state"><div class="empty-icon">🌱</div><div class="empty-msg">Start logging to build streaks!</div></div>`;
    return;
  }
  document.getElementById('streak-list').innerHTML = active.map(h => {
    const s   = streaks[h.id] || 0;
    const cc  = CAT_COLORS[h.category] || CAT_COLORS.health;
    const nxt = STREAK_REWARDS.find(r => r.days > s);
    const pct = nxt ? Math.min((s/nxt.days)*100,100) : 100;
    return `<div class="streak-row" style="background:${isDark?cc.dark:cc.light}">
      <span style="font-size:22px">${h.icon}</span>
      <div style="flex:1">
        <div class="streak-row-name" style="color:${isDark?cc.accent:cc.dark}">${h.name}</div>
        ${nxt ? `<div style="margin-top:7px">
          <div class="streak-bar-bg"><div class="streak-bar-fill" style="width:${pct}%;background:${cc.accent}"></div></div>
          <div class="streak-bar-label">${nxt.days-s} more → ${nxt.emoji}</div>
        </div>` : '<div class="streak-bar-label" style="margin-top:4px">🏆 Max milestone reached!</div>'}
      </div>
      <div class="streak-count" style="background:${cc.accent}">🔥${s}</div>
    </div>`;
  }).join('');
}

function jumpToDate(dk) { selectedDate = dk; switchView('today', document.querySelector('.nav-btn')); renderToday(); }

// ═══════════════════════════════════════════════════════════════════
// REWARDS VIEW
// ═══════════════════════════════════════════════════════════════════
function renderRewards() {
  const maxStreak = Math.max(...habits.map(h => streaks[h.id]||0), 0);
  document.getElementById('coins-big').textContent = coins + ' 🪙';
  document.getElementById('best-streak-label').textContent = `Best streak: ${maxStreak}d`;
  updateCoinDisplay();

  document.getElementById('rewards-list').innerHTML = STREAK_REWARDS.map(r => {
    const isClaimed  = claimed.some(c => c.endsWith(`-${r.days}`));
    const isReachable= maxStreak >= r.days;
    let badgeCls = 'reward-badge locked';
    let badgeTxt = `${r.days}d`;
    if (isClaimed)   { badgeCls = 'reward-badge earned';  badgeTxt = '✓ Done!'; }
    else if (isReachable) { badgeCls = 'reward-badge reached'; badgeTxt = `+${r.coins}🪙`; }
    return `<div class="reward-card${isClaimed?' earned':''}">
      <div class="reward-emoji">${r.emoji}</div>
      <div>
        <div class="reward-text">${r.reward}</div>
        <div class="reward-sub">${r.days}-day streak · +${r.coins} 🪙</div>
      </div>
      <div class="${badgeCls}">${badgeTxt}</div>
    </div>`;
  }).join('');
}

function updateCoinDisplay() {
  document.getElementById('coin-display').textContent = coins + ' 🪙';
}

// ═══════════════════════════════════════════════════════════════════
// MANAGE VIEW
// ═══════════════════════════════════════════════════════════════════
function renderManage() {
  document.getElementById('manage-list').innerHTML = habits.map(h => `
    <div class="manage-row" id="mrow-${h.id}">
      <span style="font-size:22px">${h.icon}</span>
      <div class="manage-row-info">
        <div class="manage-row-name">${h.name}</div>
        <div class="manage-row-sub">${h.measure} · ${h.target??'–'} · ${h.frequency}
          ${(streaks[h.id]||0)>0?`<span style="color:var(--warn);margin-left:6px">🔥${streaks[h.id]}</span>`:''}
        </div>
      </div>
      <div class="manage-row-actions">
        <button class="btn btn-outline" style="padding:6px 10px;font-size:12px" onclick="editHabit(${h.id})">Edit</button>
        <button class="btn btn-danger"  style="padding:6px 10px;font-size:12px" onclick="deleteHabit(${h.id})">✕</button>
      </div>
    </div>`).join('');
}

function showAddForm() {
  document.getElementById('add-form-container').innerHTML = `
    <div class="add-form-box">
      <div style="font-weight:900;font-size:16px;color:var(--text);margin-bottom:14px">✨ New Habit</div>
      <div class="form-row-2col">
        <div><label class="label">Icon</label><input id="nf-icon" value="⭐" style="text-align:center;font-size:20px"></div>
        <div><label class="label">Category</label>
          <select id="nf-cat">${Object.keys(CAT_COLORS).map(c=>`<option value="${c}">${CAT_ICONS[c]} ${c}</option>`).join('')}</select>
        </div>
      </div>
      <div class="form-row"><label class="label">Habit Name</label><input id="nf-name" placeholder="e.g. Evening Stretch"></div>
      <div class="form-row-2col">
        <div><label class="label">Measure</label>
          <select id="nf-measure">
            ${['boolean','reps','steps','duration','time','litres'].map(m=>`<option value="${m}">${m}</option>`).join('')}
          </select>
        </div>
        <div><label class="label">Target</label><input id="nf-target" placeholder="e.g. 30 or 22:00"></div>
      </div>
      <div class="form-row"><label class="label">Frequency</label>
        <select id="nf-freq">
          ${['everyday','weekly','alternate','3days','mon,wed,fri,sun','mon,wed,fri'].map(f=>`<option value="${f}">${f}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" onclick="saveNewHabit()">Add Habit</button>
        <button class="btn btn-secondary" onclick="hideAddForm()">Cancel</button>
      </div>
    </div>`;
}

function hideAddForm() { document.getElementById('add-form-container').innerHTML = ''; }

function saveNewHabit() {
  const name = document.getElementById('nf-name').value.trim();
  if (!name) { showToast('Please enter a habit name', 'warn'); return; }
  const targetRaw = document.getElementById('nf-target').value.trim();
  const target    = targetRaw ? (isNaN(Number(targetRaw)) ? targetRaw : Number(targetRaw)) : null;
  habits.push({
    id: Date.now(), name, icon: document.getElementById('nf-icon').value || '⭐',
    measure: document.getElementById('nf-measure').value,
    target, frequency: document.getElementById('nf-freq').value,
    category: document.getElementById('nf-cat').value,
  });
  save(); hideAddForm(); renderManage(); renderToday();
  showToast(`✅ ${name} added!`, 'success');
  syncToSheets();
}

function editHabit(id) {
  const h = habits.find(x => x.id === id);
  if (!h) return;
  document.getElementById(`mrow-${id}`).innerHTML = `
    <span style="font-size:22px">${h.icon}</span>
    <div style="flex:1;min-width:0">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
        <input id="eh-name-${id}" value="${h.name}" placeholder="Name">
        <input id="eh-icon-${id}" value="${h.icon}" style="text-align:center;font-size:18px">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
        <input id="eh-target-${id}" value="${h.target??''}" placeholder="Target">
        <select id="eh-freq-${id}">
          ${['everyday','weekly','alternate','3days','mon,wed,fri,sun','mon,wed,fri'].map(f=>`<option value="${f}"${f===h.frequency?' selected':''}>${f}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" style="padding:7px 14px;font-size:12px" onclick="saveEditHabit(${id})">Save</button>
        <button class="btn btn-secondary" style="padding:7px 14px;font-size:12px" onclick="renderManage()">Cancel</button>
      </div>
    </div>`;
}

function saveEditHabit(id) {
  const idx = habits.findIndex(x => x.id === id);
  if (idx < 0) return;
  const targetRaw = document.getElementById(`eh-target-${id}`).value.trim();
  habits[idx] = { ...habits[idx],
    name:      document.getElementById(`eh-name-${id}`).value.trim() || habits[idx].name,
    icon:      document.getElementById(`eh-icon-${id}`).value || habits[idx].icon,
    target:    targetRaw ? (isNaN(Number(targetRaw)) ? targetRaw : Number(targetRaw)) : null,
    frequency: document.getElementById(`eh-freq-${id}`).value,
  };
  save(); renderManage(); renderToday();
  showToast('✅ Habit updated!', 'success');
  syncToSheets();
}

function deleteHabit(id) {
  const h = habits.find(x => x.id === id);
  if (!h) return;
  if (!confirm(`Delete "${h.name}"? Streak data will be lost.`)) return;
  habits = habits.filter(x => x.id !== id);
  delete streaks[id];
  save(); renderManage(); renderToday();
  showToast(`Deleted ${h.name}`, 'warn');
  syncToSheets();
}

// ═══════════════════════════════════════════════════════════════════
// GOOGLE SHEETS SYNC
// ═══════════════════════════════════════════════════════════════════
function getScriptUrl() { return meta.scriptUrl || ''; }

async function syncToSheets() {
  const url = getScriptUrl();
  if (!url) return;
  setSyncStatus('syncing');
  try {
    const payload = {
      action: 'saveLogs',    logs,
    };
    await sheetsPost({ action:'saveStreaks', streaks });
    await sheetsPost({ action:'saveLogs',    logs    });
    await sheetsPost({ action:'saveBody',    bodyLogs});
    await sheetsPost({ action:'saveMeta',    meta: { coins, claimed, heightCm: meta.heightCm }});
    setSyncStatus('ok');
  } catch(e) {
    setSyncStatus('error', e.message);
  }
}

async function sheetsPost(body) {
  const url = getScriptUrl();
  if (!url) throw new Error('No script URL');
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type':'text/plain' }, // avoid CORS preflight
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Unknown error');
  return json.data;
}

async function sheetsGet(action) {
  const url = getScriptUrl();
  if (!url) throw new Error('No script URL');
  const res = await fetch(`${url}?action=${action}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Unknown error');
  return json.data;
}

async function manualSync() {
  const url = getScriptUrl();
  if (!url) { openSettings(); showToast('Add your Apps Script URL first', 'warn'); return; }
  setSyncStatus('syncing');
  try {
    // Pull first, then push local on top
    const remote = await sheetsGet('getAll');
    if (remote) {
      // Merge: remote wins for older dates, local wins for today
      const today = todayKey();
      if (remote.logs) {
        Object.entries(remote.logs).forEach(([dk, dl]) => {
          if (dk !== today) logs[dk] = dl;
        });
      }
      if (remote.streaks) Object.assign(streaks, remote.streaks);
      if (remote.bodyLogs) {
        Object.entries(remote.bodyLogs).forEach(([dk, e]) => {
          if (dk !== today) bodyLogs[dk] = e;
        });
      }
      if (remote.habits && remote.habits.length) habits = remote.habits;
      if (remote.meta) {
        if (remote.meta.coins  !== undefined) coins   = remote.meta.coins;
        if (remote.meta.claimed) claimed = remote.meta.claimed;
      }
      save();
    }
    // Now push everything back
    await sheetsPost({ action:'saveHabits',  habits  });
    await sheetsPost({ action:'saveLogs',    logs    });
    await sheetsPost({ action:'saveStreaks', streaks });
    await sheetsPost({ action:'saveBody',    bodyLogs});
    await sheetsPost({ action:'saveMeta',    meta: { coins, claimed, heightCm: meta.heightCm }});
    setSyncStatus('ok');
    showToast('☁️ Synced with Google Sheets!', 'success');
    renderAll();
  } catch(e) {
    setSyncStatus('error', e.message);
    showToast('Sync failed: ' + e.message, 'warn');
  }
}

async function forcePush() {
  setSyncStatus('syncing');
  try {
    await sheetsPost({ action:'saveHabits',  habits  });
    await sheetsPost({ action:'saveLogs',    logs    });
    await sheetsPost({ action:'saveStreaks', streaks });
    await sheetsPost({ action:'saveBody',    bodyLogs});
    await sheetsPost({ action:'saveMeta',    meta: { coins, claimed, heightCm: meta.heightCm }});
    setSyncStatus('ok');
    showToast('⬆️ All data pushed to Sheets!', 'success');
  } catch(e) { setSyncStatus('error'); showToast('Push failed: ' + e.message, 'warn'); }
}

async function forcePull() {
  setSyncStatus('syncing');
  try {
    const remote = await sheetsGet('getAll');
    if (remote.habits   && remote.habits.length)   habits   = remote.habits;
    if (remote.logs)    logs    = remote.logs;
    if (remote.streaks) streaks = remote.streaks;
    if (remote.bodyLogs)bodyLogs= remote.bodyLogs;
    if (remote.meta?.coins   !== undefined) coins   = remote.meta.coins;
    if (remote.meta?.claimed) claimed = remote.meta.claimed;
    if (remote.meta?.heightCm)meta.heightCm = remote.meta.heightCm;
    save();
    setSyncStatus('ok');
    showToast('⬇️ Data pulled from Sheets!', 'success');
    renderAll();
  } catch(e) { setSyncStatus('error'); showToast('Pull failed: ' + e.message, 'warn'); }
}

async function testConnection() {
  const url = document.getElementById('script-url-input').value.trim();
  if (!url) { showToast('Paste your Apps Script URL first', 'warn'); return; }
  meta.scriptUrl = url; LS.set('hf_meta', meta);
  try {
    const res = await fetch(`${url}?action=ping`);
    const json = await res.json();
    if (json.success) {
      showToast('✅ Connected to Google Sheets!', 'success');
      document.getElementById('settings-url').textContent = '✅ Connected — ' + url;
    } else throw new Error(json.error);
  } catch(e) { showToast('Connection failed: ' + e.message, 'warn'); }
}

function setSyncStatus(status, msg) {
  syncStatus = status;
  const btn  = document.getElementById('sync-btn');
  const bar  = document.getElementById('sync-bar');
  const now  = new Date().toLocaleTimeString('en-IN', {hour:'2-digit',minute:'2-digit'});
  btn.className = 'sync-btn' + (status==='syncing'?' syncing': status==='ok'?' synced':'');
  if (status==='syncing') { btn.textContent='⟳ Syncing…'; bar.textContent='Syncing with Google Sheets…'; }
  else if (status==='ok') { btn.textContent='✓ Synced';   bar.textContent=`Last synced ${now}`; setTimeout(()=>{ btn.textContent='☁️ Sync'; btn.className='sync-btn'; },3000); }
  else                    { btn.textContent='☁️ Sync';    bar.textContent=`Sync failed${msg?': '+msg:''} — tap to retry`; }
}

// ═══════════════════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════════════════
function openSettings() {
  document.getElementById('script-url-input').value = meta.scriptUrl || '';
  document.getElementById('settings-url').textContent = meta.scriptUrl
    ? `✅ Saved — ${meta.scriptUrl}`
    : 'Paste your deployed Apps Script URL here.';
  document.getElementById('settings-overlay').classList.add('open');
}
function closeSettings(e) {
  if (!e || e.target === document.getElementById('settings-overlay'))
    document.getElementById('settings-overlay').classList.remove('open');
}
function onScriptUrlChange() {
  meta.scriptUrl = document.getElementById('script-url-input').value.trim();
  LS.set('hf_meta', meta);
}
function clearAllData() {
  if (!confirm('This will delete ALL local data. Are you sure?')) return;
  localStorage.clear();
  location.reload();
}

// ═══════════════════════════════════════════════════════════════════
// RENDER ALL
// ═══════════════════════════════════════════════════════════════════
function renderAll() {
  renderToday();
  renderBody();
  renderHistory();
  renderRewards();
  renderManage();
}

// ═══════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  updateClock();
  setInterval(updateClock, 10000);

  // Set today date
  selectedDate = todayKey();

  renderAll();

  // Auto-sync on load if URL is set
  if (meta.scriptUrl) {
    setTimeout(() => manualSync(), 1500);
  }
});

// Visibility sync — re-sync when user comes back to tab/app
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && meta.scriptUrl) manualSync();
});

// ═══════════════════════════════════════════════════════════════════
// PWA — SERVICE WORKER
// ═══════════════════════════════════════════════════════════════════
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(r => console.log('HabitFlow SW ready:', r.scope))
      .catch(e => console.warn('SW registration failed:', e.message));
  });
}

// ═══════════════════════════════════════════════════════════════════
// PWA INSTALL BANNER (Android Chrome / Edge)
// ═══════════════════════════════════════════════════════════════════
let _deferredPrompt = null;

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  _deferredPrompt = e;
  _showInstallBanner();
});

window.addEventListener('appinstalled', function() {
  _hideInstallBanner();
  showToast('🎉 HabitFlow installed on your home screen!', 'success');
});

function _showInstallBanner() {
  if (document.getElementById('hf-install-banner')) return;
  const style = document.createElement('style');
  style.textContent = '@keyframes slideDown{from{transform:translateX(-50%) translateY(-110%)}to{transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(style);
  const b = document.createElement('div');
  b.id = 'hf-install-banner';
  b.style.cssText = 'position:fixed;top:0;left:50%;transform:translateX(-50%);width:100%;max-width:520px;z-index:9999;background:linear-gradient(135deg,#6C47FF,#A78BFA);color:#fff;display:flex;align-items:center;gap:10px;padding:12px 16px;font-family:Nunito,system-ui,sans-serif;box-shadow:0 4px 20px rgba(108,71,255,0.4);animation:slideDown 0.4s ease;';
  b.innerHTML = '<span style="font-size:22px">📲</span><div style="flex:1"><div style="font-weight:800;font-size:14px">Add HabitFlow to Home Screen</div><div style="font-size:11px;opacity:0.85">Works offline · Feels like an app</div></div><button onclick="_triggerInstall()" style="background:#fff;color:#6C47FF;border:none;border-radius:20px;padding:7px 14px;font-weight:800;font-size:13px;cursor:pointer;font-family:inherit;">Install</button><button onclick="_hideInstallBanner()" style="background:rgba(255,255,255,0.2);color:#fff;border:none;border-radius:50%;width:28px;height:28px;cursor:pointer;font-size:16px;flex-shrink:0;">✕</button>';
  document.body.appendChild(b);
}

function _hideInstallBanner() {
  const b = document.getElementById('hf-install-banner');
  if (b) b.remove();
}

async function _triggerInstall() {
  if (!_deferredPrompt) return;
  _deferredPrompt.prompt();
  const { outcome } = await _deferredPrompt.userChoice;
  if (outcome === 'accepted') _hideInstallBanner();
  _deferredPrompt = null;
}

// ── iOS Safari: show manual "Add to Home Screen" tip ──
(function iosTip() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  if (!isIOS || isStandalone) return;

  window.addEventListener('load', function() {
    setTimeout(function() {
      if (document.getElementById('hf-ios-tip')) return;
      const t = document.createElement('div');
      t.id = 'hf-ios-tip';
      t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#1C1C2E;color:#fff;border-radius:18px;padding:16px 20px;max-width:300px;width:calc(100% - 40px);z-index:9990;font-family:Nunito,system-ui,sans-serif;font-size:13px;box-shadow:0 8px 32px rgba(0,0,0,0.45);text-align:center;animation:slideUp 0.4s ease;';
      t.innerHTML = '<div style="font-size:26px;margin-bottom:8px">📲</div><div style="font-weight:900;font-size:15px;margin-bottom:8px">Add to Home Screen</div><div style="opacity:0.8;line-height:1.6">Tap the <b style="color:#A78BFA">Share ⎙</b> button in Safari\'s toolbar,<br>then tap <b style="color:#A78BFA">"Add to Home Screen"</b></div><button onclick="this.closest(\'#hf-ios-tip\').remove()" style="margin-top:14px;background:rgba(255,255,255,0.15);color:#fff;border:none;border-radius:10px;padding:8px 24px;font-weight:700;cursor:pointer;font-family:inherit;font-size:13px;">Got it ✓</button>';
      document.body.appendChild(t);
      setTimeout(function() { if (t.parentElement) t.remove(); }, 14000);
    }, 2500);
  });
})();

</script>
</body>
</html>
