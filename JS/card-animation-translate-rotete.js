const selectCarouselItem = (selectedButtonElement) => {
    const selectedItem = selectedButtonElement.id;

    const carousel = document.querySelector(".s-card-carousel");

    const transform = carousel.style.transform;

    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)

    const rotateYDeg = -120 * (Number(selectedItem) -1 )

    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)

    carousel.style.transform = newTransform

    const activeButtomElement = document.querySelector('.s-controller__button--active')

    activeButtomElement.classList.remove('s-controller__button--active')
    selectedButtonElement.classList.add('s-controller__button--active')
}