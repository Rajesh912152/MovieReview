let rootEl=document.getElementById('root');

let mainContainer=document.createElement('div');
mainContainer.classList.add('m-5')
rootEl.appendChild(mainContainer)

let headingEl=document.createElement('h1');
headingEl.textContent="Movie Review"
headingEl.classList.add('heading')
mainContainer.appendChild(headingEl);

let movieTitle=document.createElement('h1');
movieTitle.textContent="MOVIE TITLE";
movieTitle.classList.add("input-title")
mainContainer.appendChild(movieTitle)

let inputTitleEl=document.createElement('input')
inputTitleEl.setAttribute('type','text');
inputTitleEl.setAttribute('id',"titleId")
inputTitleEl.classList.add('input-item',"mb-3")
inputTitleEl.setAttribute('placeholder',"Enter Movie Title")
mainContainer.appendChild(inputTitleEl)

let movieReview=document.createElement('h1');
movieReview.textContent="MOVIE REVIEW";
movieReview.classList.add("input-title")
mainContainer.appendChild(movieReview)

let inputReviewEl=document.createElement('textarea')
inputReviewEl.rows=6
inputReviewEl.cols=50
inputReviewEl.setAttribute('id',"reviewId")
inputReviewEl.classList.add('input-item','mb-3')
inputReviewEl.setAttribute('placeholder',"Enter Movie Review")
mainContainer.appendChild(inputReviewEl)

let brEl=document.createElement('br')
mainContainer.appendChild(brEl)

let btnEl=document.createElement('button');
btnEl.classList.add('btn','btn-primary');
btnEl.textContent="Add"
btnEl.setAttribute("id","btnId");
mainContainer.appendChild(btnEl)

let reviewContainerEl=document.createElement('div')
reviewContainerEl.setAttribute('id',"reviewContainerId")
reviewContainerEl.classList.add('m-5')
rootEl.appendChild(reviewContainerEl)

let title=document.getElementById('titleId');
let review=document.getElementById('reviewId');
let btn11=document.getElementById('btnId')

btn11.onclick=function(){
    let titleValue=title.value;
    let reviewValue=review.value
    if (titleValue===""){
        alert("Enter Movie Name")
        return
    }
    else{
        let reviewContainer=document.getElementById('reviewContainerId')
        let head=document.createElement('h1')
        head.textContent="Movie: "+titleValue
        head.classList.add('review-heading')
        reviewContainer.appendChild(head)

        let para=document.createElement('p');
        para.textContent="Review: "+reviewValue
        reviewContainer.appendChild(para)
        rootEl.appendChild(reviewContainerEl)
        
    }
    title.value=""
    review.value=""

}