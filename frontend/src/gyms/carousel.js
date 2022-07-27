//https://mdbootstrap.com/docs/b5/react/components/carousel/
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function Carousel({gym}) {
  return (
    <div className='container' style={{ paddingTop:'5em'}}>
    <MDBCarousel showControls style={{height:'30em'}}>
      <MDBCarouselInner style={{height:'30em'}}>
        <MDBCarouselItem className='active' style={{height:'30em', backgroundColor: 'lightgrey'}}>
          <MDBCarouselElement src={gym.coverImage} alt='...'style={{height:'30em', objectFit:'contain'}} />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' style={{height:'30em', objectFit:'contain'}}/>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' style={{height:'30em', objectFit:'contain'}} />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}