const btn = document.querySelector("#throttle");

const imageArray = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg"
    // Add more image URLs as needed
];
let imageIndex = 0;

const degArray=["10deg","20deg","30deg","10deg","20deg","30deg","350deg","340deg","330deg","350deg","340deg","330deg"]
let degIndex=0;
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector(".heading").addEventListener("mousemove",
    throttleFunction((dets) => {
        var div = document.createElement("div")
        div.classList.add("imagediv")
        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px";
        document.querySelector(".heading").appendChild(div)
        var image = document.createElement("img");

        div.style.transform=`rotate(${degArray[degIndex]})`;
        degIndex=(degIndex+1)%degArray.length;

        image.setAttribute("src", imageArray[imageIndex])

        // Update imageIndex to point to the next image in the array
    imageIndex = (imageIndex + 1) % imageArray.length;

        image.classList.add("image")
        div.appendChild(image)

        gsap.to(image, {
            y: "0",
            ease: Power3,
            duraton: 6
        })
        gsap.to(image, {
            y: "100%",
            ease: Power3,
            delay: 6
        })

        setTimeout(function () {
            div.remove();

        }, 500)

        // gsap.to(image, {
        //     y: "0",
        //     ease: power3,
        //     duration: 6
        // });
        // // gsap.to(image, {
        // //     y: "100%",
        // //     ease: power3,
        // //     delay: 3,
        // // });

    }, 150));