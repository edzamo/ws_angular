import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { List } from '../../components/list/list';
import { GifsService } from '../../services/gifs.service';

/*
const serviceUrl: string[] = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
];*/

@Component({
  selector: 'trending-page',
  imports: [List],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  //listUrl: string[] = serviceUrl;
  // listUrl = signal(serviceUrl)

  gifService = inject(GifsService);

  scrollDivRef= viewChild<ElementRef>('gridScrollDiv'); //name of the variable in the html #gridScrollDiv

  onScrollDiv(event: Event) {
    console.log('Scroll event detected:', event);
    const scrollDiv= this.scrollDivRef()?.nativeElement;
    console.log('ScrollDiv Element:', scrollDiv);
    
  }
}
