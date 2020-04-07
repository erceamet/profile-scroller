const data = [
  {
    name: "John Doe",
    age: 28,
    gender: "male",
    lookingfor: "female",
    location: "Colchester, UK",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Cambridge, UK",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Jack Smith",
    age: 31,
    gender: "male",
    lookingfor: "female",
    location: "Chelmsford, UK",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
  },
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// Next event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Preference: looking for ${currentProfile.lookingfor}</li>
    </ul>
    `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
