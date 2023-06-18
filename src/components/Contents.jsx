import "./Contents.css"
import { useState } from 'react';
import Card from './Card';

const cardData = [
    {
      type: "Technology",
      time: "2hrs ago",
      title: "The Youtube Thumbnail",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
      img: "https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg",
    },
    {
        type: "Lifestyle",
        time: "3hrs ago",
        title: "Changing people's lifestyles for the better",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
        img: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        type: "Education",
        time: "4hrs ago",
        title: "Simple Solutions for Complex Connections",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
        img: "https://miro.medium.com/v2/resize:fit:1358/1*d0Qd8OUx_TUxG7N6H991ew.jpeg",
    },
    {
        type: "Sport",
        time: "5hrs ago",
        title: "All things are difficult before they are easy",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
        img: "https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/ngdjbafv3twathukjbq2",
    },
    {
        type: "Education",
        time: "6hrs ago",
        title: "How to Memorize everything you read?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
        img: "https://cdn.mos.cms.futurecdn.net/8hBsu6KV4QMdTMkuZ6cRM.jpg",
    },
    {
        type: "Healthcare",
        time: "7hrs ago",
        title: "How to stay healthy in a busy life?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
        img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
    },
    {
        type: "Food",
        time: "8hrs ago",
        title: "How to make a perfect pizza?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
    }
  ];

function Contents() {
    const [activeButton, setActiveButton] = useState(1);
    const [activeType, setActiveType] = useState(null);

    const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    };

    const handleCategoryClick = (type) => {
        if (type === "All") return setActiveType(null);
        setActiveType(type);
    };

    const filteredCards = activeType
        ? cardData.filter((card) => card.type === activeType)
        : cardData;

  return (
    <div>
        <div className="menu">
            <button
            className={activeButton === 1 ? 'active' : ''}
            onClick={() => {handleButtonClick(1);
                handleCategoryClick("All")}}>
                All
            </button>
            <button
                className={activeButton === 2 ? 'active' : ''}
                onClick={() => {handleButtonClick(2);
                    handleCategoryClick("Technology")}}>
                Technology
            </button>
            <button
                className={activeButton === 3 ? 'active' : ''}
                onClick={() => {handleButtonClick(3);
                    handleCategoryClick("Education")}}>
                Education
            </button>
            <button
                className={activeButton === 4 ? 'active' : ''}
                onClick={() => {handleButtonClick(4);
                    handleCategoryClick("Lifestyle")}}>
                Lifestyle
            </button>
            <button
                className={activeButton === 5 ? 'active' : ''}
                onClick={() => {handleButtonClick(5);
                    handleCategoryClick("Healthcare")}}>
                Healthcare
            </button>
            <button
                className={activeButton === 6 ? 'active' : ''}
                onClick={() => {handleButtonClick(6);
                    handleCategoryClick("Sport")}}>
                Sport
            </button>
            <button
                className={activeButton === 7 ? 'active' : ''}
                onClick={() => {handleButtonClick(7);
                    handleCategoryClick("Food")}}>
                Food
            </button>
        </div>
            <div className="items">
            {filteredCards.map((card, index) => (
          <Card
            key={index}
            type={card.type}
            time={card.time}
            title={card.title}
            desc={card.desc}
            img={card.img}
          />
        ))}
            </div>
    </div>
  )
}

export default Contents;