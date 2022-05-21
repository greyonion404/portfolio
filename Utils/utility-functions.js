import sanityClient from '@sanity/client';
import ImageBuilder from "@sanity/image-url";
import data from '../data';

const visitUrlInNewTab = (url) => {
    if (url) window.open(url, '_blank');
}

const urlForImage = (source) => {

    if (!source) return data.info.ProfileInformation.profileImage;

    const builder = ImageBuilder(sanityClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        useCdn: true,
    }));

    return builder.image(source).url();
}

const formattedDate = (dateString) => {
    let formatted = new Date(dateString).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
    return formatted;
}

export { visitUrlInNewTab, urlForImage, formattedDate };