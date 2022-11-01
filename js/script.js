

 document.querySelector('#display').onclick = () =>{
    document.querySelector('#primerblock').setAttribute('style','display: none !important');
    document.querySelector('#superficial').setAttribute('style','display: none !important')
    // document.querySelector('#registro').setAttribute('style','left:40%');
    document.querySelector('#registro').setAttribute('style','display:flex');
    document.querySelector('#superficial2').setAttribute('style','display: flex')
    document.querySelector('#segundoblock').setAttribute('style','display: none !important')
    document.querySelector('#tercerblock').setAttribute('style','display: flex !important')
 }

 document.querySelector('#display2').onclick = () =>{
    document.querySelector('#primerblock').setAttribute('style','display: flex');
    document.querySelector('#superficial').setAttribute('style','display: flex')
    document.querySelector('#registro').setAttribute('style','rigth:0');
    document.querySelector('#superficial2').setAttribute('style','display: none !important')
    document.querySelector('#segundoblock').setAttribute('style','rigth:0')
    document.querySelector('#tercerblock').setAttribute('style','display: none !important')
 }



