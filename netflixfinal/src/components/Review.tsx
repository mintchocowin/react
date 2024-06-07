import styled from "styled-components";

const ReviewSection = style.div`
background-color:#f8f9fa;
color:${(props) => props.theme.black.darker};
margin-top:20px;
padding:20px;
width:1620px;
border-radius:10px;
p{
width:100%;
padding:10px;
}
div{
width:100%;}`;

type ReviewProps = {
  reviews: {
    [key: number]: {
      author: string;
      content: string;
    }[];
  };
  movieId: number;
};

const Review = ({ reviews, movieId }: ReviewProps) => {
  const movieRecommendations = recommends[movieId] || [];
  return (
    <ReviewSection>
      <h3>Review</h3>
      {revies[movieId]?.length > 0 ? (
        revies[movieId].map((review, reviewIndex) => (
          <p key={reviewIndex}>
            <div>
              <ReviewTitle>{review.author}</ReviewTitle>:{review.content}
            </div>
          </p>
        ))
      ) : (
        <p>No Revies Available...</p>
      )}
    </ReviewSection>
  );
};

export default Review;
