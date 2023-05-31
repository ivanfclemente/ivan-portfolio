import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        meetupId: "m2",
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/800px-Lisbon_%2836831596786%29_%28cropped%29.jpg",
        id: meetupId,
        title: "A first meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup.",
      },
    },
  };
}

export default MeetupDetail;
