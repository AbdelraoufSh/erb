const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');



app.use(cors());
app.use(express.json());
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/images', (req, res) => {
  const fs = require('fs');
  const uploadDir = path.join(__dirname, 'uploads');

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading the uploads directory' });
    }

    const imageFiles = files.filter(file => {
      return file.match(/\.(jpg|jpeg|png|gif)$/i); 
    });

    // Return the list of image URLs
    const imageUrls = imageFiles.map(file => `/api/uploads/${file}`);
    res.json(imageUrls);
  });
});
let  myprojects=[{title:'Complete my first erb project',detail:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',date:'2025/1/9'}]
app.get('/api/hello', async (req, res) => {
    try {
      res.json({
        logo:['TODO','NINJA'],
        navigation:['The Net Ninja'],
        dashboard:['Dashboard','by project name','by person'],
        projectsbytitle:[{ProjectTitle:'Code up the homepage',person:'Chun Li',Date:'10th Jan 2019',statue:1},{ProjectTitle:'Design video thumbnailsl',person:'Ryu',Date:'10th Nov 2018',statue:-1},{ProjectTitle:'New holding page',person:'Yoshi',Date:'1st Dec 2018',statue:1},{ProjectTitle:'Record vuetify videos',person:'The Net Ninja',Date:'16th Nov 2018',statue:0}],
        projectsbyperson:[{ProjectTitle:'Code up the homepage',person:'Chun Li',Date:'10th Jan 2019',statue:1},{ProjectTitle:'Design video thumbnailsl',person:'Ryu',Date:'10th Nov 2018',statue:-1},{ProjectTitle:'Record vuetify videos',person:'The Net Ninja',Date:'16th Nov 2018',statue:0},{ProjectTitle:'New holding page',person:'Yoshi',Date:'1st Dec 2018',statue:1}],
        team:[{name:'mohammad hawwa',job:'UI/UX'},{name:'ahmad homsi',job:'Social media'},{name:'farouk assi',job:'word press'},{name:'saad dawara',job:'frontend developer'},{name:'bashar sawas',job:'laraverl developer'},{name:'humam almostafa',job:'Unknown'}],
        myprojects
    });  
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cat image!' });
    }
  });
app.post('/api/hello',(req,res)=>{
myprojects.push(req.body);
res.send('succed');
});
module.exports= (req,res)=> {
app(req,res);
};
