import img1 from '../../img/avatars/1.png';
import img2 from '../../img/avatars/2.png';
import img3 from '../../img/avatars/3.png';
import img4 from '../../img/avatars/4.png';
import img5 from '../../img/avatars/5.png';
import img6 from '../../img/avatars/6.jpeg';

const defaultPictures = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6
};

export function getAvatar(avatars) {
    if (!avatars) return;

    const avatarDefault = defaultPictures[avatars.default];
    const avatarFromUser = avatars.original;
    const avatarSteam = typeof avatars.steam === "object" ? avatars.steam.large : null;
    return avatarFromUser || avatarSteam || avatarDefault;
}