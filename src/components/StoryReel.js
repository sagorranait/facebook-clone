import React from 'react'
import './StoryReel.css'
import Story from './Story'

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story image='https://i.ibb.co/fCQVddz/176967618-4005703382825109-8840832234736135093-n.jpg' 
      profileSrc='https://i.ibb.co/ydcdZzN/155427539-3861866543875461-6188041980273597228-n.jpg' title="Rayhan Arif"/>
      <Story 
      image='https://i.ibb.co/NrJ2Bqf/176986773-2863347680547704-326359882672583263-n.jpg'
      profileSrc='https://i.ibb.co/1MJ1XB1/120322356-2701745003374640-8804540156473746567-n.jpg' title="Md Shahinur Rahman"
      />
      <Story 
      image='https://i.ibb.co/3dKVtnj/176361194-1757633654420638-5599060777875243475-n.jpg' 
      profileSrc='https://i.ibb.co/L50tBnW/125106725-1637699426414062-6273782461997480196-n.jpg' title="Al Emran"/>
      <Story 
      image='https://i.ibb.co/x7yY0Zc/176778074-3866292463408322-5999051934441932164-n.jpg>' 
      profileSrc='https://i.ibb.co/yQsNpBQ/162130546-3763006473736922-2339044593585744942-n.jpg' title="Rifat M Huq"/>
      <Story 
      image='https://i.ibb.co/NrJ2Bqf/176986773-2863347680547704-326359882672583263-n.jpg'
      profileSrc='https://i.ibb.co/1MJ1XB1/120322356-2701745003374640-8804540156473746567-n.jpg' title="Md Shahinur Rahman"
      />
    </div>
  )
}

export default StoryReel
