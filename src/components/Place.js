import React from 'react';

const Place = () => {
    const places = [
        {
            name: 'Dahlonega, Georgia, US',
            img: 'https://a0.muscache.com/im/pictures/miso/Hosting-614647815820366766/original/328998e1-fda6-40fe-b5f5-62161ff33cf4.jpeg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Mussoorie, India',
            img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1267811704786427087/original/755db56d-8d5b-4d6a-8fd8-c681404d9927.jpeg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Udaipur, India',
            img: 'https://a0.muscache.com/im/pictures/miso/Hosting-983628068535189241/original/6fb13419-22cb-4378-bacc-22fa484869e2.jpeg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Rishikesh, India',
            img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1305005902727269883/original/fc7f6798-9c74-431d-a2ea-c848b8fab04b.jpeg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Suvakholi, India',
            img: 'https://a0.muscache.com/im/pictures/miso/Hosting-1214599986762999599/original/8a1c9349-0c9e-4097-b6bb-9dd9e0a59f66.jpeg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Jibhi, India',
            img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1246078880893101870/original/8b44a534-7e86-4f8d-9906-61d5d7d0b05d.jpeg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Bathalla, Maldives',
            img: 'https://a0.muscache.com/im/pictures/miso/Hosting-853512929423214729/original/f3d27f22-5175-467a-97fa-d040a08892cc.png?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'El-Nido, Philippines',
            img: 'https://a0.muscache.com/im/pictures/1b922648-4f72-4648-95d4-1568f7ed04f0.jpg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Livingstone, Montana, US',
            img: 'https://a0.muscache.com/im/pictures/46379667/3325743a_original.jpg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Manali, India',
            img: 'https://a0.muscache.com/im/pictures/64a82eeb-c159-4268-a5d0-606aa52d762a.jpg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Solan, India',
            img: 'https://a0.muscache.com/im/pictures/miso/Hosting-583114171055927129/original/895839bb-82d6-4515-85a6-c39970c8ffa5.jpeg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            name: 'Allen Homes, US',
            img: 'https://a0.muscache.com/im/pictures/558702c2-2d8a-49b4-aab6-66c96d82293b.jpg?im_w=720&im_format=avif',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
    ];

    return (
        <div className="container text-center">
          <h1 className="my-5" style={{ visibility: 'visible', display: 'block' }}>Top Places To Visit</h1>
            <div className="row">
                {places.map((place, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                height="250px"
                                src={place.img}
                                className="card-img-top"
                                alt={place.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{place.name}</h5>
                                <p className="card-text">{place.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Place;
