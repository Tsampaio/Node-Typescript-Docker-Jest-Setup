import add from '@src/add';
// import add from '../add';

export default async (req, res) => {
  try {
    res.status(200).json({
      users: {
        name: 'Johny!!!',
        age: add(20, 7),
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      message: error.message,
    });
  }
};
