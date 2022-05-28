import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import Bouton from '../components/Bouton';
import ExploreContainer from '../components/ExploreContainer';
import Ligne from '../components/Ligne';
import { listeBouton } from '../util/listeBouton';
import './Home.css';

const Home = () => {
  const [ afficher,setAfficher]=useState("")
  const [somme,setSomme]= useState(0)
  const [historique,setHistorique]= useState("")

  const handleClick = (element,operator)=>{
    const histTmp =historique.replace(" ", "") 
         if (operator=== '='){
           calculer()

         }
         else if (operator === 'CA'){
           reinitialiser()
         }
         else if (operator ==='C'){
          effacer()
         }
         else {
           setTimeout(()=>{
             setHistorique(histTmp+operator)
           },100)
         }
  }

  const calculer = () => {
    try {
        // Effectuer le calcul  
        setSomme(eval(historique).length > 5 ? eval(historique).toFixed(4) : eval(historique))
        setAfficher("")
    } catch (e) {

    }
}

useEffect(() => {
  calculer()
}, [historique])


const reinitialiser = () => {
  setHistorique("")
  setSomme(0)
  setAfficher("")
}

const effacer = () => {
  const sommeTmp = historique.substr(0, historique.length - 1)
  setHistorique(sommeTmp)
}

const affiche = () => {
  if (somme.toString().length > 9) {
      return somme.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").substr(0, 10).concat("..")
  } else {
      return somme.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>calculatrice</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='consol'>
            {afficher && <h4>{afficher}</h4>}
            <p>{historique}</p>
            <h1>{affiche()}</h1>

        </div>
      </IonContent>
      <IonFooter>
        {
          listeBouton.map((ligne,index)=>{
            return(
              
              <Ligne key={index}>
                {
                  ligne.map((bouton)=>{
                    return(
                      <Bouton val={bouton.val} special={bouton.special} clickEvent={handleClick} />
                    )
                  })
                }
              </Ligne>
            )
          })
        }
      </IonFooter>
    </IonPage>
  );
};

export default Home;
