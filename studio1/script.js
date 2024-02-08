(function(){
    "use strict";
    console.log('reading JS');

    const text = document.querySelector('form');
    const reply = document.querySelector('#reply');

    text.addEventListener('submit', function(event){
        event.preventDefault();
        const greeting = document.querySelector('#greeting').value;
        const place = document.querySelector('#place').value;
        const number = document.querySelector('#number').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        const food = document.querySelector('#food').value;
        const relation = document.querySelector('#relation').value;
        const famous = document.querySelector('#famous').value;
        const farewell = document.querySelector('#farewell').value;
        const petName = document.querySelector('#petName').value;
        
        let myText;

        if (greeting && place && number && adj && verb && food && relation && famous && farewell && petName){
            myText = `${greeting}! I know you probably had fun on our date ${number} days ago at ${place} but personally, I didn't :/ Remember when you showed up looking ${adj}? Yea that really turned me off. Also, that time you ${verb}? Yea that gave me the ick like crazy. THEN YOU ORDERED US ${food} WHICH IM DEATHLY ALLERGIC TO AND I TOLD U THAT LIKE DID U EVER LISTEN TO ME??!!!!
            
            Anyways, I don't think we should move forward with this. I am still open to being ${relation} tho!! BTW im starting to see someone who looks like ${famous} LOL

            ${farewell}:

            From your ex-${petName} of 3 hours`
        }
        else{
            myText = "Please complete the form to see why you fumbled!!! you can't fumble twice man!"
        }

        reply.innerHTML = myText;
        reply.classList.remove('hidden');
        reply.classList.add('visible');
    });
}());