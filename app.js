// ==========================================================================
// Lehi 39th EQ Activities — app.js
// ==========================================================================

// ── Google Apps Script endpoint ──────────────────────────────────────────
// Replace this URL with your deployed Google Apps Script web app URL.
// See the setup instructions at the bottom of this file.
const API_URL = 'https://script.google.com/macros/s/AKfycby6HPD4gZCBiBx0ufLqNicUwnEBri_A5Vbh9u7XVR9qDPqjQ_9BYRu4L0ql2cw3cNHS/exec';

// ── Activity data ────────────────────────────────────────────────────────
const activities = [
  {
    id: 'eq-lessons',
    emoji: '📖',
    title: 'EQ Sunday Lessons',
    schedule: '2nd & 4th Sundays',
    location: 'Ward building',
    status: 'active',
    showVote: false,
    showSignup: false,
    domains: ['Spiritual', 'Intellectual'],
    capacity: '~50',
    lessons: [
      {
        date: 'Apr 12',
        title: 'About His Business',
        author: 'Elder Patrick Kearon',
        url: 'https://www.churchofjesuschrist.org/study/general-conference/2026/04/13kearon?lang=eng',
        secondaryTitle: 'Closing Remarks',
        secondaryAuthor: 'President Dallin H. Oaks',
        secondaryUrl: 'https://www.churchofjesuschrist.org/study/general-conference/2026/04/59oaks?lang=eng',
      },
      {
        date: 'Apr 19',
        title: 'Ward Conference — Stake-led EQ Discussion',
        author: '',
        url: '',
      },
    ],
  },
  {
    id: 'ward-temple-night',
    emoji: '',
    emojiImg: 'images/lds-temple-stylized-waiting-christ-600nw-2125612112.webp',
    title: 'Ward Temple Night',
    schedule: 'Quarterly',
    location: 'Saratoga Springs Temple',
    status: 'active',
    showVote: false,
    showSignup: false,
    link: { url: 'https://tos.churchofjesuschrist.org/', label: 'Make an Appointment' },
    flyer: { url: 'temple-family-history-2026.pdf', label: 'Temple & Family History Plan' },
    domains: ['Spiritual', 'Social'],
    capacity: '5–20',
    upcoming: [
      {
        title: 'April 17 · 7:30 PM',
        instructor: '',
        date: 'Next',
        description: '',
      },
    ],
  },
  {
    id: 'rotating-lunch',
    emoji: '🍔',
    title: 'Rotating Lunch',
    description: 'Meet up for a quick midweek lunch at a different local spot each week.',
    schedule: 'Wednesdays · 12–1 PM',
    location: 'Rotating local spots',
    status: 'active',
    showVote: false,
    domains: ['Social'],
    capacity: '5–10',
    groupme: 'https://groupme.com/join_group/113272046/ncEs8mBl',
    rotation: [
      { date: 'Apr 15', spot: 'Village Baker', address: '3320 N Digital Dr, Lehi' },
      { date: 'Apr 22', spot: 'Panera Bread', address: '2204 W Hudson Ave, Lehi' },
      { date: 'Apr 29', spot: 'Houston Hot Chicken', address: '1085 E Main St, Lehi' },
      { date: 'May 6', spot: 'Slim Chickens', address: '1250 E State St, Lehi' },
      { date: 'May 13', spot: 'Cafe Zupas', address: '3750 N Thanksgiving Way, Lehi' },
    ],
  },
  {
    id: 'softball',
    emoji: '🥎',
    title: 'Softball (Spouses & Teens Welcome)',
    schedule: '7 Saturdays: Apr 11 – May 23',
    location: 'Copper Top building',
    status: 'pending',
    showVote: false,
    groupme: 'https://groupme.com/join_group/114317532/EqLFwbIZ',
    domains: ['Physical', 'Social'],
    capacity: '~20',
  },
  {
    id: 'hobby-nights',
    emoji: '🎨',
    title: 'Hobby Nights',
    schedule: 'TBD',
    location: 'Ward church building',
    description: 'Knife making, woodworking, using AI, and more.',
    status: 'soon',
    showVote: false,
    showSignup: true,
    domains: ['Intellectual', 'Social'],
    capacity: '5–20',
    upcoming: [
      {
        title: 'Using AI Agents Crashcourse',
        instructor: 'Hosted by Scott Murff',
        date: 'TBD',
        description: 'Learn to build in a fraction of the time:\n• Websites & apps (like this one!)\n• PowerPoints & polished documents\n• Excel models & data analysis\n\n$20/mo for Claude Code — the only cost.',
      },
    ],
  },
  {
    id: 'pickleball',
    emoji: '🏓',
    title: 'Pickleball (Spouses & Teens Welcome)',
    schedules: [
      { days: 'Mon, Wed, Fri · 6–7:30 AM', location: 'Ward church building' },
      { days: 'Tues & Thurs · 8:30–10 PM', location: 'Ward church building' },
    ],
    status: 'active',
    showVote: false,
    groupme: 'https://groupme.com/join_group/113272064/RUodqXcH',
    domains: ['Physical', 'Social'],
    capacity: '~12',
  },
  {
    id: 'basketball',
    emoji: '🏀',
    title: 'Basketball (3-on-3)',
    schedules: [
      { days: 'Tues, Thurs, Sat · 6–7:30 AM', location: 'Ward church building' },
      { days: 'Wednesdays · 8:30–10 PM', location: 'Ward church building' },
    ],
    status: 'active',
    showVote: false,
    groupme: 'https://groupme.com/join_group/113272026/vkvLZHYZ',
    domains: ['Physical', 'Social'],
    capacity: '~15',
  },
  {
    id: 'evening-volleyball',
    emoji: '🏐',
    title: 'Evening Volleyball',
    schedule: '8:30–10:30 PM',
    location: 'Stake center gym',
    status: 'interest',
    showVote: true,
    domains: ['Physical', 'Social'],
    capacity: '~12',
  },
  {
    id: 'dodgeball',
    emoji: '🤾',
    title: 'Dodgeball',
    schedule: 'TBD',
    location: 'TBD',
    status: 'interest',
    showVote: true,
    domains: ['Physical', 'Social'],
    capacity: '~20',
  },
  {
    id: 'pinewood-derby',
    emoji: '🏎️',
    title: 'Adult Pinewood Derby',
    schedule: 'TBD',
    location: 'TBD',
    status: 'interest',
    showVote: true,
    domains: ['Intellectual', 'Social'],
    capacity: '~25',
  },
  {
    id: 'mountain-biking',
    emoji: '🚵',
    title: 'Mountain Biking',
    schedule: 'Saturdays · 7 AM · May–Oct',
    location: 'Rotating trailheads',
    status: 'interest',
    showVote: true,
    domains: ['Physical', 'Social'],
    capacity: '3–10',
  },
  {
    id: 'board-game-night',
    emoji: '🎲',
    title: 'Board Game Night',
    schedule: 'Friday or Saturday evening · TBD',
    location: 'TBD',
    status: 'interest',
    showVote: true,
    domains: ['Social', 'Intellectual'],
    capacity: '5–15',
  },
  {
    id: 'rock-climbing',
    emoji: '🧗',
    title: 'Rock Climbing',
    schedule: 'TBD',
    location: 'Momentum Climbing · 401 S 850 E, Lehi',
    status: 'interest',
    showVote: true,
    domains: ['Physical', 'Social'],
    capacity: '5–15',
  },
];

// ── State ────────────────────────────────────────────────────────────────
let signups = {};   // { activityId: ['Name One', 'Name Two'] }
let votes = {};     // { activityId: number }
let currentActivityId = null;

// ── DOM refs ─────────────────────────────────────────────────────────────
const activeGrid    = document.getElementById('active-grid');
const soonGrid      = document.getElementById('soon-grid');
const interestGrid  = document.getElementById('interest-grid');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose    = document.getElementById('modal-close');
const modalActivity = document.getElementById('modal-activity');
const signupForm    = document.getElementById('signup-form');
const signupName    = document.getElementById('signup-name');
const btnSubmit     = document.getElementById('btn-submit');
const signupPhone   = document.getElementById('signup-phone');
const modalError    = document.getElementById('modal-error');
const footerYear    = document.getElementById('footer-year');

// ── Init ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  footerYear.textContent = new Date().getFullYear();
  renderCards();
  loadData();
});

// ── Render cards ─────────────────────────────────────────────────────────
function renderCards() {
  const activeActivities   = activities.filter(a => a.status === 'active');
  const soonActivities     = activities.filter(a => a.status === 'soon' || a.status === 'pending');
  const interestActivities = activities.filter(a => a.status === 'interest');

  activeGrid.innerHTML   = activeActivities.map((a, i) => cardHTML(a, i)).join('');
  soonGrid.innerHTML     = soonActivities.map((a, i) => cardHTML(a, i + activeActivities.length)).join('');
  interestGrid.innerHTML = interestActivities.map((a, i) => cardHTML(a, i + activeActivities.length + soonActivities.length)).join('');

  // Bind event listeners
  document.querySelectorAll('.btn-signup').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.activity));
  });

  document.querySelectorAll('.btn-vote').forEach(btn => {
    btn.addEventListener('click', () => handleVote(btn.dataset.activity));
  });
}

function cardHTML(activity, index) {
  const isActive = activity.status === 'active';
  const names = signups[activity.id] || [];
  const voteCount = votes[activity.id] || 0;
  const hasVoted = localStorage.getItem(`vote_${activity.id}`) === '1';

  const domainHTML = (activity.domains || []).length > 0
    ? `<div class="domain-tags">${activity.domains.map(d => `<span class="domain-tag domain-${d.toLowerCase()}">${d}</span>`).join('')}</div>`
    : '';

  const capacityHTML = activity.capacity ? `
      <div class="card-detail">
        <svg class="card-detail-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="8" cy="5" r="2.5"/><path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5"/>
        </svg>
        <span>${activity.capacity} people</span>
      </div>` : '';

  const scheduleRows = activity.schedules
    ? activity.schedules.map(s => `
      <div class="card-detail">
        <svg class="card-detail-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="3" width="12" height="11" rx="1.5"/><path d="M2 6.5h12M5.5 3V1.5M10.5 3V1.5"/>
        </svg>
        <span>${s.days}</span>
      </div>`).join('') + [...new Set(activity.schedules.map(s => s.location))].map(loc => `
      <div class="card-detail">
        <svg class="card-detail-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M8 1.5C5.5 1.5 3 4 3 7c0 3.5 5 7.5 5 7.5s5-4 5-7.5c0-3-2.5-5.5-5-5.5z"/><circle cx="8" cy="7" r="1.5"/>
        </svg>
        <span>${loc}</span>
      </div>`).join('')
    : `
      <div class="card-detail">
        <svg class="card-detail-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="3" width="12" height="11" rx="1.5"/><path d="M2 6.5h12M5.5 3V1.5M10.5 3V1.5"/>
        </svg>
        <span>${activity.schedule}</span>
      </div>
      <div class="card-detail">
        <svg class="card-detail-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M8 1.5C5.5 1.5 3 4 3 7c0 3.5 5 7.5 5 7.5s5-4 5-7.5c0-3-2.5-5.5-5-5.5z"/><circle cx="8" cy="7" r="1.5"/>
        </svg>
        <span>${activity.location}</span>
      </div>`;

  const detailsHTML = `
    <div class="card-details">
      ${scheduleRows}
      ${capacityHTML}
    </div>`;

  const descHTML = activity.description
    ? `<p class="card-desc">${escapeHTML(activity.description)}</p>`
    : '';

  const lessonHTML = activity.lessons ? activity.lessons.map(l => `
    <div class="card-lesson">
      <div class="lesson-date">${l.date}</div>
      ${l.url
        ? `<a href="${l.url}" target="_blank" rel="noopener" class="lesson-title">${escapeHTML(l.title)}</a>`
        : `<span class="lesson-title">${escapeHTML(l.title)}</span>`}
      ${l.author ? `<div class="lesson-author">${escapeHTML(l.author)}</div>` : ''}
      ${l.secondaryUrl ? `
        <a href="${l.secondaryUrl}" target="_blank" rel="noopener" class="lesson-title lesson-secondary">${escapeHTML(l.secondaryTitle || '')}</a>
        ${l.secondaryAuthor ? `<div class="lesson-author">${escapeHTML(l.secondaryAuthor)}</div>` : ''}` : ''}
    </div>`).join('')
    : activity.lesson ? `
    <div class="card-lesson">
      <div class="lesson-date">${activity.lesson.date}</div>
      <a href="${activity.lesson.url}" target="_blank" rel="noopener" class="lesson-title">${escapeHTML(activity.lesson.title)}</a>
      <div class="lesson-author">${escapeHTML(activity.lesson.author)}</div>
    </div>` : '';

  const upcomingHTML = activity.upcoming ? `
    <div class="card-rotation">
      ${activity.upcoming.map(u => `
        <div class="rotation-item">
          <div class="rotation-date">${u.date}</div>
          <span class="lesson-title">${escapeHTML(u.title)}</span>
          ${u.instructor ? `<div class="lesson-author"><em>${escapeHTML(u.instructor)}</em></div>` : ''}
          ${u.description ? `<div class="rotation-address">${escapeHTML(u.description).replace(/\n/g, '<br>')}</div>` : ''}
        </div>`).join('')}
    </div>` : '';

  const rotationHTML = activity.rotation ? `
    <div class="card-rotation">
      ${activity.rotation.map(r => {
        const mapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(r.address);
        return `
        <div class="rotation-item">
          <div class="rotation-date">${r.date}</div>
          <a href="${mapsUrl}" target="_blank" rel="noopener" class="rotation-spot">${escapeHTML(r.spot)}</a>
          <div class="rotation-address">${escapeHTML(r.address)}</div>
        </div>`;
      }).join('')}
    </div>` : '';

  const voteHTML = activity.showVote ? `
    <div class="vote-row">
      <button class="btn-vote${hasVoted ? ' voted' : ''}" data-activity="${activity.id}">
        ✋ I'm interested
      </button>
      <span class="vote-count" id="vote-count-${activity.id}">${voteCount > 0 ? voteCount + ' interested' : ''}</span>
    </div>` : '';

  const canSignup = (isActive || activity.status === 'soon' || activity.status === 'pending') && activity.showSignup !== false && !activity.groupme;

  const namesHTML = canSignup ? `
    <div class="names-section">
      <div class="names-label">Signed up</div>
      <div class="names-list" id="names-${activity.id}">
        ${names.length > 0
          ? names.map(n => `<span class="name-chip">${escapeHTML(n)}</span>`).join('')
          : '<span class="names-empty">Be the first!</span>'}
      </div>
    </div>` : '';

  const linkHTML = activity.link
    ? `<a href="${activity.link.url}" target="_blank" rel="noopener" class="btn-signup">${escapeHTML(activity.link.label)}</a>`
    : '';

  const flyerHTML = activity.flyer
    ? `<a href="${activity.flyer.url}" target="_blank" rel="noopener" class="btn-flyer">${escapeHTML(activity.flyer.label)}</a>`
    : '';

  const signupBtnHTML = activity.groupme
    ? `<a href="${activity.groupme}" target="_blank" rel="noopener" class="btn-signup">Join Group Chat</a>
       <span class="groupme-hint">Uses GroupMe, a free group texting app. You may be prompted to install it.</span>`
    : canSignup
      ? `<button class="btn-signup" data-activity="${activity.id}">Sign Up</button>`
      : '';

  const badgeHTML = isActive
    ? '<div class="badge-active">Happening</div>'
    : activity.status === 'pending'
      ? '<div class="badge-pending">Pending</div>'
      : activity.status === 'soon'
        ? '<div class="badge-soon">Coming Soon</div>'
        : '<div class="badge-interest">Gauging Interest</div>';

  const interestPromptHTML = '';

  return `
    <div class="activity-card" style="animation-delay: ${index * 0.06}s" data-id="${activity.id}">
      <div class="card-header">
        ${activity.emojiImg
          ? `<img class="card-emoji-img" src="${activity.emojiImg}" alt="">`
          : `<span class="card-emoji">${activity.emoji}</span>`}
        <span class="card-title">${activity.title}</span>
      </div>
      ${badgeHTML}
      ${domainHTML}
      ${detailsHTML}
      ${lessonHTML}
      ${descHTML}
      ${upcomingHTML}
      ${linkHTML}
      ${flyerHTML}
      ${rotationHTML}
      ${voteHTML}
      ${canSignup ? namesHTML : interestPromptHTML}
      ${signupBtnHTML}
    </div>`;
}

// ── Load data from Google Sheets ─────────────────────────────────────────
async function loadData() {
  if (API_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
    console.log('No API URL configured. Set API_URL in app.js to your deployed Google Apps Script URL.');
    return;
  }

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    // data.signups = { activityId: ['Name', ...] }
    if (data.signups) {
      signups = data.signups;
    }

    // data.votes = { activityId: count }
    if (data.votes) {
      votes = data.votes;
    }

    renderCards();
  } catch (err) {
    console.error('Failed to load data:', err);
  }
}

// ── Modal ────────────────────────────────────────────────────────────────
function openModal(activityId) {
  currentActivityId = activityId;
  const activity = activities.find(a => a.id === activityId);
  modalActivity.textContent = activity.title;
  modalError.textContent = '';
  signupName.value = '';
  signupPhone.value = '';

  // Show phone field only for active (Happening) activities
  const isActive = activity.status === 'active';
  signupPhone.style.display = isActive ? '' : 'none';
  signupPhone.required = isActive;

  modalBackdrop.classList.add('open');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  setTimeout(() => signupName.focus(), 250);
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  currentActivityId = null;
  btnSubmit.classList.remove('loading');
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Sign-up submit ───────────────────────────────────────────────────────
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = signupName.value.trim();
  const phone = signupPhone.value.trim();
  if (!name) return;

  // Require phone for active activities
  const activity = activities.find(a => a.id === currentActivityId);
  if (activity && activity.status === 'active' && !phone) {
    modalError.textContent = 'Phone number is required so we can group text.';
    return;
  }

  // Client-side duplicate check
  const existing = signups[currentActivityId] || [];
  if (existing.some(n => n.toLowerCase() === name.toLowerCase())) {
    modalError.textContent = `${name} is already signed up!`;
    return;
  }

  modalError.textContent = '';
  btnSubmit.classList.add('loading');

  // Optimistic UI update (only name shown on card)
  if (!signups[currentActivityId]) signups[currentActivityId] = [];
  signups[currentActivityId].push(name);
  updateNamesUI(currentActivityId);

  // POST to Google Sheets (phone included for sheet only)
  try {
    await fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        action: 'signup',
        activity: currentActivityId,
        name: name,
        phone: phone || '',
      }),
    });
  } catch (err) {
    console.error('Sign-up POST failed:', err);
  }

  btnSubmit.classList.remove('loading');
  closeModal();
});

// ── Update names on a card ───────────────────────────────────────────────
function updateNamesUI(activityId) {
  const container = document.getElementById(`names-${activityId}`);
  if (!container) return;

  const names = signups[activityId] || [];
  container.innerHTML = names.length > 0
    ? names.map(n => `<span class="name-chip">${escapeHTML(n)}</span>`).join('')
    : '<span class="names-empty">Be the first!</span>';
}

// ── Vote / Interest ──────────────────────────────────────────────────────
async function handleVote(activityId) {
  const key = `vote_${activityId}`;
  if (localStorage.getItem(key) === '1') return; // already voted

  localStorage.setItem(key, '1');

  // Optimistic update
  votes[activityId] = (votes[activityId] || 0) + 1;
  updateVoteUI(activityId);

  // Style the button
  const btn = document.querySelector(`.btn-vote[data-activity="${activityId}"]`);
  if (btn) btn.classList.add('voted');

  // POST to Google Sheets
  try {
    await fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        action: 'vote',
        activity: activityId,
      }),
    });
  } catch (err) {
    console.error('Vote POST failed:', err);
  }
}

function updateVoteUI(activityId) {
  const el = document.getElementById(`vote-count-${activityId}`);
  if (!el) return;
  const count = votes[activityId] || 0;
  el.textContent = count > 0 ? `${count} interested` : '';
}

// ── Idea Form ───────────────────────────────────────────────────────
const ideaForm      = document.getElementById('idea-form');
const ideaText      = document.getElementById('idea-text');
const btnIdeaSubmit = document.getElementById('btn-idea-submit');
const ideaError     = document.getElementById('idea-modal-error');

ideaForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = ideaText.value.trim();
  if (!text) return;

  ideaError.textContent = '';
  ideaText.value = '';

  // Show success immediately
  btnIdeaSubmit.querySelector('.btn-text').textContent = 'Thanks!';
  btnIdeaSubmit.classList.add('success');
  setTimeout(() => {
    btnIdeaSubmit.querySelector('.btn-text').textContent = 'Submit';
    btnIdeaSubmit.classList.remove('success');
  }, 2000);

  // Fire-and-forget POST
  fetch(API_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({ action: 'idea', text }),
  }).catch(err => console.error('Idea POST failed:', err));
});

// ── Helpers ──────────────────────────────────────────────────────────────
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}


// ==========================================================================
// GOOGLE APPS SCRIPT SETUP
// ==========================================================================
//
// 1. Create a new Google Sheet. Name it whatever you like.
//
// 2. Create two tabs (sheets):
//    - "Signups" with columns: Timestamp | Activity | Name | Phone
//    - "Votes"   with columns: Activity | Count
//
// 3. Pre-populate the "Votes" tab with one row per activity:
//      eq-lessons          | 0
//      softball            | 0
//      rotating-lunch      | 0
//      hobby-nights        | 0
//      morning-pickleball  | 0
//      morning-basketball  | 0
//      evening-pickleball  | 0
//      evening-basketball  | 0
//      pinewood-derby      | 0
//      mountain-biking     | 0
//
// 4. Go to Extensions > Apps Script and paste this code:
//
// ────────────────────────────────────────────────
// function doGet() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//
//   // Signups
//   const signupSheet = ss.getSheetByName('Signups');
//   const signupData = signupSheet.getDataRange().getValues();
//   const signups = {};
//   for (let i = 1; i < signupData.length; i++) {
//     const activity = signupData[i][1];
//     const name = signupData[i][2];
//     if (!signups[activity]) signups[activity] = [];
//     signups[activity].push(name);
//   }
//
//   // Votes
//   const voteSheet = ss.getSheetByName('Votes');
//   const voteData = voteSheet.getDataRange().getValues();
//   const votes = {};
//   for (let i = 0; i < voteData.length; i++) {
//     votes[voteData[i][0]] = voteData[i][1];
//   }
//
//   return ContentService
//     .createTextOutput(JSON.stringify({ signups, votes }))
//     .setMimeType(ContentService.MimeType.JSON);
// }
//
// function doPost(e) {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const payload = JSON.parse(e.postData.contents);
//
//   if (payload.action === 'signup') {
//     const sheet = ss.getSheetByName('Signups');
//     sheet.appendRow([new Date(), payload.activity, payload.name, payload.phone || '']);
//     return ContentService
//       .createTextOutput(JSON.stringify({ success: true }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
//
//   if (payload.action === 'vote') {
//     const sheet = ss.getSheetByName('Votes');
//     const data = sheet.getDataRange().getValues();
//     for (let i = 0; i < data.length; i++) {
//       if (data[i][0] === payload.activity) {
//         sheet.getRange(i + 1, 2).setValue(data[i][1] + 1);
//         break;
//       }
//     }
//     return ContentService
//       .createTextOutput(JSON.stringify({ success: true }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
//
//   return ContentService
//     .createTextOutput(JSON.stringify({ error: 'Unknown action' }))
//     .setMimeType(ContentService.MimeType.JSON);
// }
// ────────────────────────────────────────────────
//
// 5. Deploy:
//    - Click Deploy > New Deployment
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
//    - Click Deploy, authorize, copy the URL
//
// 6. Paste the URL into the API_URL constant at the top of this file.
//
// ==========================================================================
