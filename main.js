const userResponse = document.querySelector("#slide-02-user-input")
const buttonSwag = document.querySelectorAll(
  "#button-swag-container > a > button"
)

buttonSwag.forEach((button) => {
  button.addEventListener("click", () => {
    userResponse.textContent = button.textContent.toLowerCase()
  })
})

const buttonNo = document.querySelector("#button-no")
const buttonYes = document.querySelector("#button-yes")

/* all units in rem */
let currentPaddingX = 2
let currentPaddingY = 1
let count = 0

buttonNo.addEventListener("click", () => {
  console.log(buttonNo.textContent)

  if (count >= 0 && count <= 2) {
    // currentPaddingX *= 1.5
    // currentPaddingY *= 1.5

    // let newX = currentPaddingX + "rem"
    // let newY = currentPaddingY + "rem"

    // buttonYes.style.paddingInline = newX
    // buttonYes.style.paddingBlock = newY
    let className = "button-yes-count-"
    let oldSize = className + count
    let newSize = className + (count + 1)

    if (buttonYes.classList.replace(oldSize, newSize)) {
      buttonYes.classList.replace(oldSize, newSize)
    } else {
      buttonYes.classList.add(newSize)
    }

    cycleImage()
  } else {
    buttonYes.classList.replace("button-yes-count-3", "button-yes-fullscreen")

    /* reset these values */
    // buttonYes.style.paddingInline = "2rem"
    // buttonYes.style.paddingBlock = "1rem"

    /* reset sizes */
    // currentPaddingX = 2 currentPaddingY = 1
  }

  count++
})

buttonYes.addEventListener("click", () => {
  console.log(buttonYes.textContent)
  buttonYes.classList.remove("button-yes-fullscreen")

  /* reset count */
  count = 0
})

const images = document.querySelectorAll("#image-container>img")
const textChange = document.querySelector("#text-change")

index = 0
function cycleImage() {
  // List of images
  imagesArray = Array.from(images)

  let textList = [
    "Please, will you be my valentine?",
    "Pretty PLEASE, will you be my valentine?",
    "I'm down on my knees, PLEASE",
  ]

  if (index < imagesArray.length) {
    if (imagesArray[index].classList.contains("block")) {
      imagesArray[index].classList.replace("block", "hidden")
    }
    imagesArray[index + 1].classList.replace("hidden", "block")
  }

  if (index < textList.length) {
    textChange.textContent = textList[index]
  }
  index++
}
