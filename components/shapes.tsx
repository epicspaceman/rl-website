import { useEffect } from 'react';

export default function Shapes(props: any) {
    const randomRGB = () => {
        return Math.random() * (255-1) + 1;
    }

    const randomA = () => {
        return Math.random() * (130-1) + 1;
    }

    const randomPosY = () => {
        return Math.random() * (props.maxY-1) + props.minY;
    }

    const randomPosX = () => {
        return Math.random() * (80-1) + 1;
    }

    useEffect(() => {
        var sDiv = document.getElementById('shapes');
        for (let i = 0; i < ( Math.random() * (10-1) + 5); i++) {
            var div = document.createElement("div");
            div.style.width = "500px";
            div.style.height = "500px";
            div.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}`;
            div.style.opacity = ".7";
            div.style.zIndex = "-1";
            div.style.position = "absolute";
            div.style.top = `${randomPosY()}%`;
            div.style.left = `${randomPosX()}%`;
            switch (props.vertexes) {
                case 3:
                    div.style.clipPath = `polygon(${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%)`;
                    break;
                case 4:
                    div.style.clipPath = `polygon(${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%)`;
                    break;
                case 5:
                    div.style.clipPath = `polygon(${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%)`;
                    break;
                case 6:
                    div.style.clipPath = `polygon(${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%)`;
                    break;
                default:
                    div.style.clipPath = `polygon(${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%, ${randomA()}% ${randomA()}%)`;
            }
            
            if (sDiv != null) {
                sDiv.appendChild(div);
            }
        }
    })

  return (
    <div id='shapes'></div>
  )
  }