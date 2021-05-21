
import local from '../images/local.png';
import userImg from '../images/user.png';
import cestabasica from '../images/cestabasica.png'
import higiene from '../images/higiene.png'
import vestuario from '../images/vestuario.png'

function Cards() {
            
    const donationPosts = [
        {item: "Cesta Básica",
        key: "Rachel123",
        qty: "2",
        userName: "Rachel",
        state: "RJ",
        city: "Rio de Janeiro",
        userStatus: "Beneficiário"},

        {item: "Kit higiene",
        key: "Daniel123",
        qty: "1",
        userName: "Daniel",
        state: "BA",
        city: "Salvador",
        userStatus: "Doador"},

        {item: "Vestuário",
        key: "Monique123",
        qty: "3",
        userName: "Monique",
        state: "RJ",
        city: "Rio de Janeiro",
        userStatus: "Doador"},
        
        {item: "Cesta Básica",
        key: "Marina123",
        qty: "1",
        userName: "Marina",
        state: "SP",
        city: "São Paulo",
        userStatus: "Doador"}
    ];

    const imgDonation = [
        {src: cestabasica},
        {src:higiene},
        {src:vestuario}
    ];

   return (
        <div>
            {/* recebe informações do formulário de doação */}
            <div className='cardContainer'>
            {donationPosts.map((donation) => (
               <div className='cardContent'>
                <h3>{donation.userStatus === "Doador" ? "Para doação" : "Preciso de ajuda"}</h3>
                <div className='cardDonation'>
                {donation.item === "Cesta Básica" ? <img className="imageItem" src={imgDonation[0].src} alt={donation.item}></img> : ""}
                {donation.item === "Vestuário" ? <img className="imageItem" src={imgDonation[2].src} alt={donation.item}></img> : ""}
                {donation.item === "Kit higiene" ? <img className="imageItem" src={imgDonation[1].src} alt={donation.item}></img> : ""}
                    <p className='donationItem'>Item para doação: {donation.item}</p>
                    <p className='donationQty'> Quantidade: {donation.qty}</p>
                </div>
                <div className='cardUser'>
                    <img className="imageUser" src={userImg} alt='Icone de usuário'></img>
                    <p className='userInfo'>{donation.userStatus}: </p>
                    <p className='showUsername'>{donation.userName}</p>
                    <p className='showUserLocal'><img src={local} alt='Icone de localizador'/> {donation.city} / {donation.state}</p>
                </div>
                {/* abre janela de contato com usuário */}
            <button>
               {donation.userStatus === "Doador" ? "Quero receber" : "Quero doar"}
            </button>
                </div>
      ))}          
            </div>
            
        </div>
    )
}

export default Cards;