import P1 from '../../assets/images/P1.png';
import P2 from '../../assets/images/P2.png';
import P3 from '../../assets/images/P3.png';
import P4 from '../../assets/images/P4.png';
import icon from '../../assets/images/toko.png';
import image from '../../assets/images/shoppic.png';

const array = [
  {
    nama: 'Black Jacket',
    image: P1,
    harga: '$90',
    country: 'Padang',
    brand: 'Brand',
    category: 'Suit',
    weight: '250gr',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque ultrices pretium hendrerit risus sed. Libero amet, habitasse tellus ultrices orci mattis pulvinar tincidunt. Consectetur diam sed ultrices suspendisse pellentesque ',
    id: '1',
    rating: 3,
    jumlahrating: 20,
    detailrating: [
      {
        idrating: '1',
        namarating: 'Marilyn Dias',
        ket: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae pulvinar pellentesque enim porttitor turpis sagittis. Sed dui id ut quis amet ullamcorper a aenean gravida. Massa enim est auctor mattis. Tristique faucibus gravida semper id elit mauris est. Iaculis neque donec ac scelerisque nisi, odio eget in. Ullamcorper nulla ultricies etiam dui neque nunc. Amet ultricies quis at purus nisl quisque.',
        tgl: '26 October 2022',
        rating: 3,
      },
      {
        idrating: '2',
        namarating: 'Marilyn Dias',
        ket: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae pulvinar pellentesque enim porttitor turpis sagittis. Sed dui id ut quis amet ullamcorper a aenean gravida. Massa enim est auctor mattis. Tristique faucibus gravida semper id elit mauris est. Iaculis neque donec ac scelerisque nisi, odio eget in. Ullamcorper nulla ultricies etiam dui neque nunc. Amet ultricies quis at purus nisl quisque.',
        tgl: '26 October 2022',
        rating: 5,
      },
      {
        idrating: '3',
        namarating: 'Marilyn Dias',
        ket: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae pulvinar pellentesque enim porttitor turpis sagittis. Sed dui id ut quis amet ullamcorper a aenean gravida. Massa enim est auctor mattis. Tristique faucibus gravida semper id elit mauris est. Iaculis neque donec ac scelerisque nisi, odio eget in. Ullamcorper nulla ultricies etiam dui neque nunc. Amet ultricies quis at purus nisl quisque.',
        tgl: '26 October 2022',
        rating: 2,
      },
      {
        idrating: '4',
        namarating: 'Marilyn Dias',
        ket: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae pulvinar pellentesque enim porttitor turpis sagittis. Sed dui id ut quis amet ullamcorper a aenean gravida. Massa enim est auctor mattis. Tristique faucibus gravida semper id elit mauris est. Iaculis neque donec ac scelerisque nisi, odio eget in. Ullamcorper nulla ultricies etiam dui neque nunc. Amet ultricies quis at purus nisl quisque.',
        tgl: '26 October 2022',
        rating: 1,
      },
    ],
  },
  {
    nama: 'Pink Shoes',
    image: P2,
    harga: '$90',
    country: 'Padang',
    brand: 'Brand',
    category: 'Suit',
    weight: '250gr',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque ultrices pretium hendrerit risus sed. Libero amet, habitasse tellus ultrices orci mattis pulvinar tincidunt. Consectetur diam sed ultrices suspendisse pellentesque ',
    id: '2',
    rating: 4,
    jumlahrating: 30,
    detailrating: [
      {
        idrating: '1',
        namarating: 'Marilyn Dias',
        ket: 'Ndak Tau Yo Tanya Saya',
        tgl: '26 October 2022',
        rating: 3,
      },
      {
        idrating: '2',
        namarating: 'Marilyn Dias',
        ket: 'Selamat Anda Di Prank Asw',
        tgl: '26 October 2022',
        rating: 5,
      },
      {
        idrating: '3',
        namarating: 'Marilyn Dias',
        ket: 'AwikWokAwikWokAwikWokAwikWokAwikWok',
        tgl: '26 October 2022',
        rating: 2,
      },
      {
        idrating: '4',
        namarating: 'Marilyn Dias',
        ket: 'Entahlah Mending Turu Brutal Aja Kali Cuy ',
        tgl: '26 October 2022',
        rating: 1,
      },
    ],
  },
  {
    nama: 'Shirt',
    image: P3,
    harga: '$90',
    country: 'Padang',
    brand: 'Brand',
    category: 'Suit',
    weight: '250gr',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque ultrices pretium hendrerit risus sed. Libero amet, habitasse tellus ultrices orci mattis pulvinar tincidunt. Consectetur diam sed ultrices suspendisse pellentesque ',
    id: '3',
    rating: 1,
    jumlahrating: 40,
    detailrating: [
      {
        idrating: '1',
        namarating: 'Marilyn Dias',
        ket: 'Ndak Tau Yo Tanya Saya',
        tgl: '26 October 2022',
        rating: 3,
      },
      {
        idrating: '2',
        namarating: 'Marilyn Dias',
        ket: 'Selamat Anda Di Prank Asw',
        tgl: '26 October 2022',
        rating: 5,
      },
      {
        idrating: '3',
        namarating: 'Marilyn Dias',
        ket: 'AwikWokAwikWokAwikWokAwikWokAwikWok',
        tgl: '26 October 2022',
        rating: 2,
      },
      {
        idrating: '4',
        namarating: 'Marilyn Dias',
        ket: 'Entahlah Mending Turu Brutal Aja Kali Cuy ',
        tgl: '26 October 2022',
        rating: 1,
      },
    ],
  },
  {
    nama: 'Sneaker',
    image: P4,
    harga: '$90',
    country: 'Padang',
    brand: 'Brand',
    category: 'Suit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque ultrices pretium hendrerit risus sed. Libero amet, habitasse tellus ultrices orci mattis pulvinar tincidunt. Consectetur diam sed ultrices suspendisse pellentesque ',
    weight: '250gr',
    id: '4',
    rating: 5,
    jumlahrating: 50,
    detailrating: [
      {
        idrating: '1',
        namarating: 'Marilyn Dias',
        ket: 'Ndak Tau Yo Tanya Saya',
        tgl: '26 October 2022',
        rating: 3,
      },
      {
        idrating: '2',
        namarating: 'Marilyn Dias',
        ket: 'Selamat Anda Di Prank Asw',
        tgl: '26 October 2022',
        rating: 5,
      },
      {
        idrating: '3',
        namarating: 'Marilyn Dias',
        ket: 'AwikWokAwikWokAwikWokAwikWokAwikWok',
        tgl: '26 October 2022',
        rating: 2,
      },
      {
        idrating: '4',
        namarating: 'Marilyn Dias',
        ket: 'Entahlah Mending Turu Brutal Aja Kali Cuy ',
        tgl: '26 October 2022',
        rating: 1,
      },
    ],
  },
];

const Shop = {
  nama: 'Fitrah_Shop',
  status: '1',
  description: 'Tokonya Gak Tau Yang Punya Siapa Cuy',
  instagram: 'fitrah_shop',
  Line: 'fitrahshop',
  iconshop: icon,
  rating: '4.9',
  jmlproduk: '30',
  image1: image,
  produk: array,
};

const Cart = [
  {
    namashop: 'Dhika Shop',
    produk: [
      {
        nama: 'Black Jacket',
        image: P1,
        harga: 90,
        size: 'L',
        color: 'Black',
        jumlah: 1,
      },
      {
        nama: 'Pink Shoes',
        image: P2,
        harga: 90,
        size: '40',
        color: 'white',
        jumlah: 1,
      },
      {
        nama: 'Shirt',
        image: P3,
        harga: 90,
        size: 'S',
        color: 'White',
        jumlah: 1,
      },
    ],
  },
  {
    namashop: 'fitrah shop',
    produk: [
      {
        nama: 'Black Jacket',
        image: P1,
        harga: 90,
        size: 'L',
        color: 'Black',
        jumlah: 1,
      },
      {
        nama: 'Pink Shoes',
        image: P2,
        harga: 90,
        size: '40',
        color: 'white',
        jumlah: 1,
      },
      {
        nama: 'Shirt',
        image: P3,
        harga: 90,
        size: 'S',
        color: 'White',
        jumlah: 1,
      },
    ],
  },
];
export default {array, Shop, Cart};
