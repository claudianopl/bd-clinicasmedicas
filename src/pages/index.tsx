import { createServer } from 'miragejs';
import { useCallback } from 'react';
import Clinicas from './Clinicas/index';

createServer({
  routes() {
    this.timing = 2000;
    this.get('api/pacients', () => {
      return [
        {
          id: '41421447687876',
          name: '1',
          address:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero corporis quidem laudantium distinctio porro, earum inventore maxime fuga voluptas tempora tenetur quae et sed dicta, dolore at architecto aliquam iure iste itaque aspernatur quia molestiae ut? Commodi a voluptatum dicta nam odit asperiores natus consequatur, autem excepturi qui dolor. Porro quae consectetur, fugiat a ut necessitatibus perferendis est aut delectus rerum cupiditate ad culpa repudiandae quia blanditiis. Explicabo expedita totam iusto consequatur quia suscipit ullam delectus! Cum deserunt illo praesentium quos, magni possimus, voluptates voluptatem laborum sint minima, sapiente error vero maxime nemo pariatur! Cum excepturi accusamus incidunt nisi sit.',
          phone:
            '66342344rua dos loucosrua dos loucosrua dos loucosrua dos loucosrua dos loucosrua dos loucosrua dos loucosrua dos loucosrua dos loucosrua dos loucosrua dos loucos',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '123414214144',
          name: '2',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '7682421421876',
          name: '2',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
          iddd: 'ddd',
          nameddd: 'nameddd',
          adddddress: 'adddddress',
          phonddde: 'phonddde',
          emddail: 'emddail',
        },
        {
          id: '7682421421876',
          name: '2',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
          iddd: 'ddd',
          nameddd: 'nameddd',
          adddddress: 'adddddress',
          phonddde: 'phonddde',
          emddail: 'emddail',
        },
        {
          id: '7682421421876',
          name: '2',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
          iddd: 'ddd',
          nameddd: 'nameddd',
          adddddress: 'adddddress',
          phonddde: 'phonddde',
          emddail: 'emddail',
        },
        {
          id: '12342412414',
          name: '3',
          address: 'rua da esquina',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '32179421428321',
          name: '3',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '231312141123',
          name: '3',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '7412421412876',
          name: '3',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '12344214212414',
          name: '4',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '321792414321',
          name: '4',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '23131412442421213',
          name: '4',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '76841147876',
          name: '4',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '12424124414',
          name: '5',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '32174221442198321',
          name: '5',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '2313244211241242121213',
          name: '5',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '7687874126',
          name: '5',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '1234264',
          name: 'mirage',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '174214248321',
          name: 'craudio',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '2311364313',
          name: 'jessy',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '763131637876',
          name: 'carla',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '1236133612312316414',
          name: 'mirage',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '32213179153538321',
          name: 'craudio',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '23135553122313213',
          name: 'jessy',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '7687323213787897892231876',
          name: 'carla',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '12347631231234',
          name: 'mirage',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '321798321367721',
          name: 'craudio',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '23132311213797897878',
          name: 'jessy',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '768787543456786',
          name: 'carla',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
      ];
    });
  },
});

const Home: React.FC = () => {
  const handleCreateClinical = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <>
      <Clinicas />
    </>
  );
};

export default Home;
