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
    schedule: '2nd & 4th Sundays (weekly starting Sep 6)',
    location: 'Ward building',
    status: 'active',
    showVote: false,
    showSignup: false,
    domains: ['Spiritual', 'Intellectual'],
    capacity: '~50',
    lessons: [
      {
        date: 'May 24',
        title: 'All Who Have Endured Valiantly',
        author: 'Elder Bednar',
        url: '',
      },
      {
        date: 'Jun 14',
        title: 'Best Days and Worst Days',
        author: 'Sister Freeman',
        url: '',
      },
      {
        date: 'Jun 28',
        title: 'The Character of Christ',
        author: 'President Christofferson',
        url: '',
      },
      {
        date: 'Jul 12',
        title: 'Alive in Christ',
        author: 'President Oaks',
        url: '',
      },
      {
        date: 'Jul 26',
        title: 'Love All; Love Each',
        author: 'Elder Caussé',
        url: '',
      },
      {
        date: 'Aug 9',
        title: 'Ministering + Lost Luggage, Redeemed Souls',
        author: 'Sister Yee & Elder Stevenson',
        url: '',
      },
      {
        date: 'Aug 23',
        title: 'Jesus Christ Is the Way / Choose Jesus as Your Guide',
        author: 'Elder Holmes & Elder Rowe',
        url: '',
      },
      {
        date: 'Sep 6',
        title: 'Come Home',
        author: 'Elder Gilbert',
        url: '',
      },
      {
        date: 'Sep 13',
        title: '— Stake Conference (no EQ lesson) —',
        author: '',
        url: '',
      },
      {
        date: 'Sep 20',
        title: 'Prayers for Peace',
        author: 'President Eyring',
        url: '',
      },
      {
        date: 'Sep 27',
        title: 'Because of Jesus Christ',
        author: 'Elder Renlund',
        url: '',
      },
      {
        date: 'Oct 3–4',
        title: '— General Conference (no EQ lesson) —',
        author: '',
        url: '',
      },
      {
        date: 'Oct 11',
        title: "Teacher's pick from October 2026 Conference",
        author: '(conference debrief)',
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
        title: 'July 10 · 7:30 PM',
        instructor: '',
        date: 'Next',
        description: 'Families with youth: consider attending for baptisms together.',
      },
    ],
  },
  {
    id: 'ward-campout',
    emoji: '⛺',
    title: 'Ward & Neighbor Campout',
    schedule: 'June 12–13 (Fri–Sat)',
    location: 'Granite Flats Campground · American Fork Canyon',
    coordinator: 'Bryce Packer',
    status: 'active',
    showVote: false,
    showSignup: false,
    domains: ['Social', 'Spiritual'],
    description: 'Campground reserved Friday night through Saturday evening. Fishing available at nearby Tibble Fork Reservoir. Contact Bryce: (240) 274-3216 or brycepacker@gmail.com',
    links: [
      { url: 'https://www.recreation.gov/camping/campsites/33654', label: 'Campsite Info' },
      { url: 'https://www.google.com/maps/dir/?api=1&destination=Granite+Flats+Campground,+American+Fork+Canyon,+UT', label: 'Driving Directions' },
      { url: 'https://dwrapps.utah.gov/fishing/?NA=Tibble%20Fork%20Reservoir', label: 'Fishing Report' },
    ],
  },
  {
    id: 'church-cleaning',
    emoji: '🧹',
    title: 'Church Building Cleaning',
    schedule: 'Saturdays · 9–10 AM · May & June',
    location: 'Ward church building',
    coordinator: 'Jeramy Herrin',
    status: 'active',
    showVote: false,
    showSignup: false,
    domains: ['Service'],
    description: 'Our ward has the building cleaning assignment for May and June. Come lend a hand!',
  },
  {
    id: 'rotating-lunch',
    emoji: '🍔',
    title: 'Rotating Lunch',
    description: 'Meet up for a quick midweek lunch at a different local spot each week.',
    schedule: 'Wednesdays · 12–1 PM',
    location: 'Rotating local spots',
    coordinator: 'Jay Liddle',
    status: 'active',
    showVote: false,
    domains: ['Social'],
    capacity: '5–10',
    groupme: 'https://groupme.com/join_group/113272046/ncEs8mBl',
    rotation: [
      { date: 'May 28', spot: 'Cafe Rio', address: '821 W State Rd, American Fork' },
      { date: 'Jun 4', spot: 'Blaze Pizza', address: '3370 Digital Dr, Lehi' },
      { date: 'Jun 11', spot: 'Super Chix', address: '643 Pacific Dr, Ste 102, American Fork' },
      { date: 'Jun 18', spot: 'Zao Asian Cafe', address: '1249 E Main St, Ste 100, Lehi' },
      { date: 'Jun 25', spot: 'The Smoked Taco', address: '933 W 500 N, Ste 102, American Fork' },
      { date: 'Jul 2', spot: 'Vessel Kitchen', address: '197 NW State St, American Fork' },
    ],
  },
  {
    id: 'softball',
    emoji: '🥎',
    title: 'Softball (Spouses & Teens Welcome)',
    schedule: 'Saturdays · 10 AM · Apr 19 – May 23',
    location: 'Copper Top building',
    coordinator: 'Kevin Monroe',
    status: 'past',
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
    status: 'active',
    showVote: false,
    showSignup: true,
    domains: ['Intellectual', 'Social'],
    capacity: '5–20',
    upcoming: [
      {
        title: 'Next Hobby Night',
        instructor: 'Topic & date TBD',
        date: 'Coming Soon',
        description: 'Have an idea or want to host? Let us know below!',
      },
      {
        title: 'Using AI Agents Crashcourse',
        instructor: 'Hosted by Scott Murff',
        date: 'May 7 ✓',
        description: 'Built websites, PowerPoints, Excel models & more with AI agents.',
      },
    ],
  },
  {
    id: 'pickleball',
    emoji: '🏓',
    title: 'Pickleball (Spouses & Teens Welcome)',
    coordinator: 'Scott Murff',
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
    status: 'soon',
    showVote: false,
    groupme: 'https://groupme.com/join_group/113930045/BMtHcNkG',
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
const pastGrid      = document.getElementById('past-grid');
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
  const pastActivities     = activities.filter(a => a.status === 'past');

  activeGrid.innerHTML   = activeActivities.map((a, i) => cardHTML(a, i)).join('');
  soonGrid.innerHTML     = soonActivities.map((a, i) => cardHTML(a, i + activeActivities.length)).join('');
  interestGrid.innerHTML = interestActivities.map((a, i) => cardHTML(a, i + activeActivities.length + soonActivities.length)).join('');
  pastGrid.innerHTML     = pastActivities.map((a, i) => cardHTML(a, i + activeActivities.length + soonActivities.length + interestActivities.length)).join('');

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

  const coordinatorHTML = activity.coordinator ? `
      <div class="card-detail card-coordinator">
        <svg class="card-detail-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5 6.5 5z"/>
        </svg>
        <span>Coordinator: ${escapeHTML(activity.coordinator)}</span>
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
      ${coordinatorHTML}
    </div>`;

  const descHTML = activity.description
    ? `<p class="card-desc">${escapeHTML(activity.description)}</p>`
    : '';

  const filteredLessons = activity.lessons ? filterPastDates(activity.lessons, 'date').slice(0, 3) : null;
  const lessonHTML = filteredLessons && filteredLessons.length > 0 ? filteredLessons.map(l => `
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

  const filteredRotation = activity.rotation ? filterPastDates(activity.rotation, 'date').slice(0, 3) : null;
  const rotationHTML = filteredRotation && filteredRotation.length > 0 ? `
    <div class="card-rotation">
      ${filteredRotation.map(r => {
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

  const linkHTML = activity.links
    ? activity.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="btn-signup">${escapeHTML(l.label)}</a>`).join('')
    : activity.link
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
        : activity.status === 'past'
          ? '<div class="badge-past">Completed</div>'
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
function parseActivityDate(dateStr) {
  const clean = dateStr.replace(/–.*/, '').trim();
  const currentYear = new Date().getFullYear();
  const parsed = new Date(`${clean} ${currentYear}`);
  return isNaN(parsed) ? null : parsed;
}

function filterPastDates(items, dateKey) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return items.filter(item => {
    const d = parseActivityDate(item[dateKey]);
    return !d || d >= today;
  });
}

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
