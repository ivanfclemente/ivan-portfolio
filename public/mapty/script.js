'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lon]
    this.distance = distance; //in km
    this.duration = duration; // in mins
  }
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

////////////////////////////////////
//////APPLICATION ARCHITECTURE//////
////////////////////////////////////

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  #sorted = false;
  #currentworkout;

  constructor() {
    //Get user's position
    this._getPosition();

    //Get data from local storage
    this._getLocalStorage();

    //Add buttons to delete and sort workouts
    this._btnDeleteWorkouts();
    this._btnSortWorkouts();

    //Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        },
        { enableHighAccuracy: true }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    //console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling click events
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    //Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    let workout;

    //Check if data is valid

    //If workout running, check if data is valid & create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');
      if (!this.#currentworkout) {
        const { lat, lng } = this.#mapEvent.latlng;
        workout = new Running([lat, lng], distance, duration, cadence);
      }
      if (this.#currentworkout) {
        this.#currentworkout.distance = distance;
        this.#currentworkout.duration = duration;
        this.#currentworkout.cadence = cadence;
        this.#currentworkout.pace = duration / distance;
      }
    }

    //If workout cycling, check if data is valid & create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      if (!this.#currentworkout) {
        const { lat, lng } = this.#mapEvent.latlng;
        workout = new Cycling([lat, lng], distance, duration, elevation);
      }
      if (this.#currentworkout) {
        this.#currentworkout.distance = distance;
        this.#currentworkout.duration = duration;
        this.#currentworkout.elevation = elevation;
        this.#currentworkout.speed = distance / (duration / 60);
      }
    }

    if (!this.#currentworkout) {
      //Add new object to workouts array
      this.#workouts.push(workout);

      //Render workout marker
      this._renderWorkoutMarker(workout);

      //Render workout on a list
      this._renderWorkout(workout);
    }

    //Hide form & Clear input fields
    this._hideForm();

    //Set local sotrage for workout
    this._setLocalStorage();

    if (this.#currentworkout) {
      this.#currentworkout = undefined;
      this._renderAllWorkouts(e);
      //location.reload();
    }
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${
            workout.description
          }<span class="workout__btns btn-deleteWorkout">🚫</span><span class="workout__btns btn-editWorkout">📝</span></h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;

    if (workout.type === 'running') {
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
    }

    if (workout.type === 'cycling') {
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _renderAllWorkouts(e) {
    e.preventDefault();
    const workouts = document.querySelectorAll('.workout');
    workouts.forEach(w => w.remove());

    const sortedWorkouts = [...this.#workouts].sort(
      (a, b) => b.distance - a.distance
    );
    if (!this.#sorted) this.#workouts.forEach(w => this._renderWorkout(w));

    if (this.#sorted) sortedWorkouts.forEach(w => this._renderWorkout(w));
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    const buttonDel = e.target.closest('.btn-deleteWorkout');
    const buttonEdit = e.target.closest('.btn-editWorkout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    if (buttonDel) {
      if (confirm('Do you wish to delete the workout?') == true) {
        this.#workouts = this.#workouts.filter(work => work.id !== workout.id);
        this._setLocalStorage();
        location.reload();
      }
      return;
    }
    if (buttonEdit) {
      this.#currentworkout = workout;
      inputType.value = workout.type;
      inputDistance.value = workout.distance;
      inputDuration.value = workout.duration;
      inputCadence.value = workout.cadence;
      inputElevation.value = workout.elevationGain;

      //Toggle Cadence/Elevation field
      if (
        (workout.type === 'running' &&
          inputCadence
            .closest('.form__row')
            .classList.contains('form__row--hidden')) ||
        (workout.type === 'cycling' &&
          inputElevation
            .closest('.form__row')
            .classList.contains('form__row--hidden'))
      ) {
        this._toggleElevationField();
      }
      this._showForm(e);
    }

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;

    let workout;
    data.forEach(work => {
      if (work.type === 'running') {
        workout = new Running(
          work.coords,
          work.distance,
          work.duration,
          work.cadence
        );
      }
      if (work.type === 'cycling') {
        workout = new Cycling(
          work.coords,
          work.distance,
          work.duration,
          work.elevationGain
        );
      }
      workout.id = work.id;
      workout.date = work.date;
      workout.description = work.description;
      this.#workouts.push(workout);
    });
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
  _btnDeleteWorkouts() {
    containerWorkouts.insertAdjacentHTML(
      'afterend',
      `<button class="btn-deleteAllWorkouts">Delete all Workouts 🚫</button>`
    );
    document.querySelector('.btn-deleteAllWorkouts').addEventListener(
      'click',
      function () {
        if (confirm('Do you wish to delete all the workouts?') == true) {
          this.reset();
        }
        //this.reset();
      }.bind(this)
    );
  }

  _btnSortWorkouts() {
    containerWorkouts.insertAdjacentHTML(
      'afterend',
      `<button class="btn-sortWorkouts">Sort workouts by distance / date 🔃</button>`
    );
    document.querySelector('.btn-sortWorkouts').addEventListener(
      'click',
      function () {
        this.#sorted = !this.#sorted;
      }.bind(this)
    );
    document
      .querySelector('.btn-sortWorkouts')
      .addEventListener('click', this._renderAllWorkouts.bind(this));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
