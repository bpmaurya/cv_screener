console.log("cv_screener");

//data is an aray of object which contains informaitons about candidates

const data = [
  {
    name: "rahul",
    age: 23,
    city: "kolkata",
    language: "python",
    framework: "django",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "vedprakash",
    age: 23,
    city: "kolkata",
    language: "python",
    framework: "django",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
  },
  {
    name: "maurya",
    age: 23,
    city: "kolkata",
    language: "python",
    framework: "django",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "cp",
    age: 23,
    city: "kolkata",
    language: "python",
    framework: "django",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "cpf",
    age: 23,
    city: "kolkata",
    language: "python",
    framework: "django",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);
const next = document.getElementById('next');
next.addEventListener('click',nextCV);
nextCV();

function nextCV(){
    const CurrentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (CurrentCandidate != undefined){
    image.innerHTML = `<img src='${CurrentCandidate.image} '>`;
    
    profile.innerHTML = `<ul>
    <li class="list-group-item">${CurrentCandidate.name} </li>
    <li class="list-group-item">${CurrentCandidate.age} </li>
    <li class="list-group-item">${CurrentCandidate.city} </li>
    <li class="list-group-item">${CurrentCandidate.language} </li>
    <li class="list-group-item">${CurrentCandidate.framework} </li>
    </ul>`;
    }
    else{
        alert('end of applications');
        window.location.reload();
    }
}


