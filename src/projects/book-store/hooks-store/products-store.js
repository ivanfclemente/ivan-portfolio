import { initiStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };
  initiStore(actions, {
    products: [
      {
        id: "p1",
        price: 6,
        title: "The Process",
        author: "Franz Kafka",
        description:
          "Written in 1914, The Trial is the terrifying tale of Josef K., a respectable bank officer who is suddenly and inexplicably arrested and must defend himself against a charge about which he can get no information. Whether read as an existential tale, a parable, or a prophecy of the excesses of modern bureaucracy wedded to the madness of totalitarianism, Kafka's nightmare has resonated with chilling truth for generations of readers.",
        isFavorite: false,
      },
      {
        id: "p2",
        price: 5,
        title: "One Hundred Years of Solitude",
        author: "Gabriel Garcia-Márquez",
        description:
          "One Hundred Years of Solitude tells the story of the rise and fall, birth and death of the mythical town of Macondo through the history of the Buendiá family. Inventive, amusing, magnetic, sad and alive with unforgettable men and women—brimming with truth, compassion, and a lyrical magic that strikes the soul—this novel is a masterpiece in the art of fiction.",
        isFavorite: false,
      },
      {
        id: "p3",
        price: 7,
        title: "Memoirs of Hadrian",
        author: "Marguerite Yourcenar",
        description:
          "Both an exploration of character and a reflection on the meaning of history, Memoirs of Hadrian has received international acclaim since its first publication in France in 1951. In it, Marguerite Yourcenar reimagines the Emperor Hadrian's arduous boyhood, his triumphs and reversals, and finally, as emperor, his gradual reordering of a war-torn world, writing with the imaginative insight of a great writer of the twentieth century while crafting a prose style as elegant and precise as those of the Latin stylists of Hadrian's own era.",
        isFavorite: false,
      },
      {
        id: "p4",
        price: 10.5,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        description:
          "Fyodor Dostoyevsky's powerful meditation on faith, meaning and morality. When brutal landowner Fyodor Karamazov is murdered, the lives of his sons are changed irrevocably: Mitya, the sensualist, whose bitter rivalry with his father immediately places him under suspicion for parricide; Ivan, the intellectual, whose mental tortures drive him to breakdown; the spiritual Alyosha, who tries to heal the family's rifts; and the shadowy figure of their bastard half-brother Smerdyakov. As the ensuing investigation and trial reveal the true identity of the murderer, Dostoyevsky's dark masterpiece evokes a world where the lines between innocence and corruption, good and evil, blur and everyone's faith in humanity is tested. ",
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;
