import Orphanage from '../models/Orphanage';
import imagesViews from './images_views'
export default {
    render (orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            about: orphanage.about,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends:orphanage.open_on_weekends,
            images: imagesViews.renderMany(orphanage.images)
        };
    },

    renderMany(orphanages: Orphanage[]) {
        return orphanages.map((orphanage) => this.render(orphanage));
    }
}