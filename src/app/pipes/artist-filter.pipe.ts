import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistFilter'
})

export class ArtistFilterPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {

        if (!items) { return []; }
        if (!searchText) { return items; }

        searchText = searchText.toLowerCase();

        // returns array of only items that have search term
        return items.filter( it => {
            // returns true or false for each item
            return it.artistDescription.toLowerCase().includes(searchText);
        });
    }
}
