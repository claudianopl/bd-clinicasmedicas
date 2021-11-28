import { createServer } from 'miragejs';
import Clinicas from './Clinicas/index';

createServer({
  routes() {
    this.timing = 2000;
    this.get('api/pacients', () => {
      return [
        {
          id: '41421447687876',
          name: '1',
          address: 'rua dos loucos',
          phone: '66342344',
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
          id: '321421214421798321',
          name: '2',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '23134214214214211213',
          name: '2',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '7687412421421876',
          name: '2',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '1234242412414',
          name: '3',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '32179421421428321',
          name: '3',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '231312141414123',
          name: '3',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '7412421412687876',
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
          id: '3217924142418321',
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
          id: '7684114412427876',
          name: '4',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '12424124121423414',
          name: '5',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '321742214424242198321',
          name: '5',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '2313244211241242144121213',
          name: '5',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '7687874124126',
          name: '5',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '12342615414',
          name: 'mirage',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '3217914214248321',
          name: 'craudio',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '231136431213',
          name: 'jessy',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '76863131637876',
          name: 'carla',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '123613361316414',
          name: 'mirage',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '321791535315318321',
          name: 'craudio',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '2313531135531213',
          name: 'jessy',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '76873232132113231876',
          name: 'carla',
          address: 'rua dos loucos',
          phone: '66342344',
          email: 'carlacruz@gmail.com',
        },
        {
          id: '123431231231214',
          name: 'mirage',
          address: 'da puta quiu pariu',
          phone: '12313313213',
          email: 'marcosninja@gmail.com',
        },
        {
          id: '32179832132321',
          name: 'craudio',
          address: 'CU rado',
          phone: '32423213',
          email: 'Craudioninja@gmail.com',
        },
        {
          id: '23132311213',
          name: 'jessy',
          address: 'jão carlos',
          phone: '23213421',
          email: 'jessycarla@gmail.com',
        },
        {
          id: '7687876',
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
  return (
    <>
      <Clinicas />
    </>
  );
};

export default Home;
