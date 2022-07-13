const bollywoodList = [
    { category:'bollywood', id: 31, title: 'Mahaan: Chiyaan Vikram and son Dhruv Vikram starrer to premiere', image: 'https://st1.bollywoodlife.com/wp-content/uploads/2022/01/Mahaan_Chiyaan_Vikram_Dhruv_Vikram_Amazon_Prime_Release_Date.jpg?impolicy=Medium_Widthonly&w=800', para: 'Mahaan, starring Chiyaan Vikram and son Dhruv Vikram together for the first time, has locked its release date. The Tamil action movie, directed by noted Tamil cinema filmmaker Karthik Subbaraj, will premiere on Amazon Prime Video on 10th February. The film, produced by Lalit Kumar, is a narrative of a series of events that transform the whole life of an ordinary man as well as all the people around him. Mahaan features real-life father-son duo Vikram and Dhruv Vikram along with Bobby Simha and Simran in pivotal roles. The movie will premiere worldwide exclusively on Prime Video starting 10th February and will also be available in Malayalam, Telugu and Kannada. In Kannada, the film will be titled Maha Purusha. Also Read - Oscars 2022: Being the Ricardos, The Lost Daughter, The Eyes of Tammy Faye and more Best Actress nominees you can watch now on Netflix, Hotstar and other OTT platforms', avatar: '' },
    { category:'bollywood', id: 32, title: 'Gangubai Kathiawadi: Legal Trouble Or A Publicity Ploy?', image: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1645777815.jpeg', para: 'The film is a semi-biographical drama loosely based on Ganga Harjivandas Kathiawadi, whose life was written about in the book Mafia Queens of Mumbai, by S. Hussain Zaidi. In the film, Ganga (Alia Bhatt) is a young woman who starts as a brothel worker and becomes a powerful underground figure. There’s also an intriguing controversy surrounding the film, which almost always is a good reason to watch.', avatar: '' },
    { category:'bollywood', id: 33, title: 'Hey! Sinamika', image: 'https://www.pinkvilla.com/imageresize/hey_sinamika_trailer_1_2.jpg?width=752&format=webp&t=pvorg', para: 'This musical romantic comedy may have dazzling dance numbers, but it also has a good amount of drama. A couple falls madly in love and gets married, but eventually things fizzle out. But when her husband suddenly gains a new female friend, the wife realizes she may not be as over him as she thought.', avatar: '' },
    { category:'bollywood', id: 34, title: 'RRR(Reduce, Reuse, Recycle)', image: 'https://www.pinkvilla.com/imageresize/_rrr_postponed.jpg?width=752&format=webp&t=pvorg', para: 'This Telugu-language period action drama is set in the ’20s. It tells the story of two legendary revolutionaries who, after a journey away from home, go back to India to fight back against British colonizers.', avatar: '' },
    { category:'bollywood', id: 35, title: 'Aank Micholi', image: 'https://images.livemint.com/img/2021/07/29/600x338/cap;ture_1627535043436_1627535050937.jpg', para: 'This movie is bound to be a blast! The story revolves around a wacky family of misfits who are preparing for a huge wedding—a classic premise that never fails for family entertainment. And yes, this one’s a musical, with music composed by Sachin-Jigar.', avatar: '' },
    { category:'bollywood', id: 36, title: 'Adipurush', image: 'https://newsmobile.in/wp-content/uploads/2021/03/Adipurush.jpg', para: 'This mythological action film is based on the Indian epic Ramayana, which is an important piece of ancient text in Hinduism.', avatar: '' },
    { category:'bollywood', id: 37, title: 'Action Hero', image: 'https://filmfare.wwmindia.com/content/2021/oct/ayushmannkhurrana41633764093.jpg', para: 'There aren’t too many details revealed about the plot of this film, but it looks very 007-esque based on this announcement teaser. It stars the talented Ayushmann Khurrana in the lead role.', avatar: '' },
    { category:'bollywood', id: 38, title: 'The White Tiger', image: 'https://files.prokerala.com/images/1200/the-white-tiger-new-posters.jpg', para: 'This Ava DuVernay co-produced movie is based on a New York Times bestseller of the same title. The White Tiger follows Balram (Adarsh Ghourav), a man who comes from poverty and aspires to become a wealthy heir’s chauffeur. And in a Parasite-esque turn of events, with his street smarts and cunning, he winds up on top.', avatar: '' },
    { category:'bollywood', id: 39, title: 'Ramprasad Ki Tehrvi', image: 'https://www.deccanherald.com/sites/dh/files/gallery_images/file7f95xl1dn1yzc2435i8.jpg', para: 'Though this film premiered at the Mumbai Film Festival in 2019, this is the first time it’s getting a theatrical release. Ramprasad Ki Tehrvi tells the story of Ramprasad’s (Naseeruddin Shah) family as they all gather under one roof to perform the 13-day ritual following his death. And in those 13 days, they have some realizations about their family, themselves, and the lives they’re living.', avatar: '' },
    { category:'bollywood', id: 40, title: 'Master', image: 'https://www.moviecanny.com/wp-content/uploads/2020/10/Master-Movie.jpg', para: 'Alcoholic professor John “JD” Durairaj (Joseph Vijay) falls out of favor with his colleagues and the school administration because of his popularity. He then becomes a teacher at a juvenile prison, where he goes head-to-head with Bhavani (Vijay Sethupathi) — a vengeful gangster with his own troubled history — who uses the kids to do his bidding and take the fall for crimes.', avatar: '' },
    { category:'bollywood', id: 41, title: 'Bell Bottom', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/bell-bottom-akshay-kumar.jpg?J5ySKvYUXu6H3gmpCbOi_ZRUCHeSDS2d&size=770:433', para: 'Bell Bottom is a fun ’80s-style spy movie, which actor Akshay Kumar says is inspired by true events. Not a whole lot has been revealed about the film, but it’s set to premiere in April this year.', avatar: '' },
    { category:'bollywood', id: 42, title: '83', image: 'https://i0.wp.com/www.opindia.com/wp-content/uploads/2021/11/83.jpg?w=700&ssl=1', para: 'This upcoming Indian sports drama is a biopic that tells the story of the country’s incredible cricket team that won the 1983 World Cup.', avatar: '' },
    { category:'bollywood', id: 43, title: '14 Phere', image: 'https://www.cosmopolitanme.com/public/images/2021/02/02/phere_3.jpg', para: 'This social-comedy-romance, which premieres on July 9, 2021, talks about love during a time where the caste system still persists. The protagonists in the movie defy the odds by pulling off a plot to fool their families.', avatar: '' },
    { category:'bollywood', id: 44, title: 'Sooryavanshi ', image: 'https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/inline-images/sooryavanshi.jpg?8RD1WSO_FkeXhppoJH_up9z0Zec_hxjU', para: 'Sooryavanshi is an upcoming Hindi-language action film directed by Rohit Shetty and produced by Reliance Entertainment, Rohit Shetty Picturez, Dharma Productions, and Cape of Good Films. The story follows DCP Veer Sooryavanshi, the chief of the Mumbai Anti-Terrorism Squad. He and his team join forces with Inspector Sangram Bhalerao and DCP Bajirao Singham to stop a terrorist group planning to attack Mumbai.', avatar: '' },
    { category:'bollywood', id: 45, title: 'Sardar Udham Singh', image: 'https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/inline-images/Sardar_Udham_Singh.jpg?KhO8AHoJZnzlwZQiVoA.jpeTnsxA914G', para: 'Sardar Udham Singh is an upcoming Hindi-language biographical film about Udham Singh, a revolutionary freedom fighter best known for assassinating Michael ODwyer in London to take revenge for the 1919 Jallianwala Bagh massacre in Amritsar. The film stars Vicky Kaushal as Singh and is directed by Shoojit Sircar and produced by Rising Sun Films in collaboration with Kino Works.', avatar: '' },
]

module.exports =bollywoodList;