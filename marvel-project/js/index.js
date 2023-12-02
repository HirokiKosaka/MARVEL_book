const privateKey = process.env.PRIVATEKEY;
const publicKey = process.env.PUBLICKEY;

const ts = 1;
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

let offset = 0;
const limit = 100;

const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}`;

axios.get(url)
  .then(res => {
    console.log(res.data);
    // console.log(res.data.data.results[0].thumbnail.path + '.jpg');
    // console.log(res.data.data.results[0].name);
    const img = document.createElement('IMG');
    const aryResult = res.data.data.results.map((char) => {
      // return char.thumbnail.path + '.jpg';
      return char;
    });
    // console.log(aryResult);
    aryResult.forEach((thumbnail) => {
      const liTag = document.createElement('li');
      
      // console.log('hey', thumbnail.thumbnail.path + '.jpg');
      const img = document.createElement('img');
      if (thumbnail.thumbnail.extension === 'jpg') {
        img.src = thumbnail.thumbnail.path + '.jpg';
      } else if (thumbnail.thumbnail.extension === 'gif') {
        img.src = thumbnail.thumbnail.path + '.gif';
      } else if (thumbnail.thumbnail.extension === 'png') {
        img.src = thumbnail.thumbnail.path + '.png';
      };
      liTag.appendChild(img);

      // console.log('name', thumbnail.name);
      const nameTag = document.createElement('p');
      nameTag.textContent = thumbnail.name;
      liTag.appendChild(nameTag);

      const ulEl = document.querySelector('.each-char');
      ulEl.appendChild(liTag);
    });
  })
  .catch(error => {
    console.error(error);
  });

const more = document.querySelector('.more');

more.addEventListener('click', () => {
  console.log('clicked');
  offset += 100; // offset を増やす

  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}`;

  axios.get(url)
    .then(res => {
      console.log(res.data);
      const img = document.createElement('IMG');
      const aryResult = res.data.data.results.map((char) => {
        return char;
      });

      aryResult.forEach((thumbnail) => {
        const liTag = document.createElement('li');
        const img = document.createElement('img');

        if (thumbnail.thumbnail.extension === 'jpg') {
          img.src = thumbnail.thumbnail.path + '.jpg';
        } else if (thumbnail.thumbnail.extension === 'gif') {
          img.src = thumbnail.thumbnail.path + '.gif';
        } else if (thumbnail.thumbnail.extension === 'png') {
          img.src = thumbnail.thumbnail.path + '.png';
        };

        liTag.appendChild(img);

        const nameTag = document.createElement('p');
        nameTag.textContent = thumbnail.name;
        liTag.appendChild(nameTag);

        const ulEl = document.querySelector('.each-char');
        ulEl.appendChild(liTag);
      });
    })
    .catch(error => {
      console.error(error);
    });
});