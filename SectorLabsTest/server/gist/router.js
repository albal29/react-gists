import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const BASE_URL = 'https://api.github.com';

function GistItem(id,files,description) {
  this.id = id;
  this.files = files;
  this.description = description;
}
 
function ForkItem(id, avatar, username, url) {
  this.id = id;
  this.avatar = avatar;
  this.username = username;
  this.url = url;
}

router.get('/gists', (req, res) => {
  console.log("REQUEST: " + req.query.username);
  fetch(`${BASE_URL}/users/${req.query.username}/gists`, {
      headers: {
          'Accept': 'application/vnd.github+json',
        },
  }).then((rawResponse) => 
      rawResponse.json().then(data => ({
          data: data,
          status: rawResponse.status
      })
    ).then(result => {
        console.log(result.status, result.data)
      let arr = Array();
      for( let i = 0 ; i < result.data.length ; i++){  
        const gist = new GistItem(result.data[i].id,result.data[i].files,result.data[i].description);
        arr.push(gist);
      }
        res.status(result.status).send(arr);
    }));
  });

  router.get('/gistForks', (req, res) => {
    console.log("REQUEST: " + req.query.gist_id)
    fetch(`${BASE_URL}/gists/${req.query.gist_id}/forks?per_page=3`, {
        headers: {
            'Accept': 'application/vnd.github+json',
          },
    }).then((rawResponse) => 
        rawResponse.json().then(data => ({
            data: data,
            status: rawResponse.status
        })
      ).then(result => {
        console.log(result.status, result.data)
        let arr = Array();
        for( let i = 0 ; i < result.data.length ; i++){  
          const item = new ForkItem(result.data[i].id, result.data[i].owner.avatar_url, result.data[i].owner.login, result.data[i].html_url);
          arr.push(item);
        }
          res.status(result.status).send(arr);
      }));
  });

export default router;