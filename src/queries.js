import { gql } from "@apollo/client";

export const GET_GALLERY_IMAGES = gql`
  {
    galleryImages {
      id
      imageTitle
      image {
        url
      }
    }
  }
`;