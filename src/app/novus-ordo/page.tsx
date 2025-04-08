import React from 'react';
import HoverPopup from '../components/HoverPopup';
import Template from '../components/Template';
import Arch from '../components/Arch';

const items = [
  <div className="flex flex-col items-center space-y-4">
    <HoverPopup popups={[
      { text: "The ministers process to the altar as a hymn or chant is sung, symbolizing the Church on pilgrimage. The music unites the faithful and sets the tone for the celebration." }
    ]}>
      <h3 className="text-3xl font-bold cursor-help UnifrakturMaguntia">Entrance</h3>
    </HoverPopup>

    <img
      src="/images/Mass Procession.jpg"
      alt=""
      className="w-42 h-42 rounded-full object-cover opacity-70 transform scale-x-[-1]" />
  </div>,
  <HoverPopup popups={[
    { text: "The priest, standing in the person of Christ, greets the people with words drawn from Scripture, proclaiming God's presence among His gathered people." }
  ]}>
    <div>
      <h3 className="text-3xl font-bold cursor-help">Greeting</h3>
      <img
        src="/images/Mass Greeting.jpg"
        alt="Mass Greeting"
        className="w-42 h-42 rounded-full object-cover opacity-70 object-[center_15%]" />
      {/* <p className="font-medium cursor-help">
        <span className="text-[#7a2f2f]">Priest: </span>
        May the peace of Christ, the love of the Father <br />
        and the Unity of the Holy Spirit be with you all
      </p>
      <p className="font-medium cursor-help">
        All: And with your spirit
      </p> */}
    </div>
  </HoverPopup>,
  <div className='flex flex-col items-center space-y-4'>
    <HoverPopup popups={[
      { text: "All are invited to acknowledge their sins, preparing their hearts to enter the sacred mysteries with humility and trust in God’s mercy." }
    ]}>
      <h3 className="text-3xl font-bold cursor-help">Penitential Act</h3>
    </HoverPopup>

    <HoverPopup popups={[
      { text: "This ancient Greek prayer — “Lord, have mercy. Christ have mercy” — is a brief but powerful cry for help and healing, rooted in the early Church’s liturgy." }
    ]}>
      <img
        src="/images/The-Penitent-Magdalen.jpg"
        alt=""
        className="w-42 h-42 rounded-full object-cover opacity-70" />
      {/* <div>
        <p className="text-xl font-medium cursor-help">Kyrie Eleison</p>
        <p className="text-xl font-medium cursor-help">Christe Eleison</p>
        <p className="text-xl font-medium cursor-help">Kyrie Eleison</p>
      </div> */}
    </HoverPopup>
  </div>,
  <HoverPopup popups={[
    { text: "A joyful hymn of praise sung on feasts and Sundays outside of Advent and Lent, glorifying God for His goodness and the gift of salvation." }
  ]}>
    <div>
      <h3 className="text-3xl font-bold cursor-help">Gloria</h3>
      <img
        src="/images/monks-chanting.jpg"
        alt=""
        className="w-42 h-42 rounded-full object-cover opacity-70" />
      {/* <p className="font-medium cursor-help">
        Glória in excélsis Deo<br />
        et in terra pax homínibus bonae voluntátis.<br />
      </p> */}
    </div>
  </HoverPopup>,
  <HoverPopup popups={[
    { text: "The priest, standing in the person of Christ, greets the people with words drawn from Scripture, proclaiming God's presence among His gathered people." }
  ]}>
    <div>
      <h3 className="text-3xl font-bold cursor-help">Collect</h3>
      <img
        src="/images/praying-priest.avif"
        alt=""
        className="w-42 h-42 rounded-full object-cover opacity-70" />
      {/* <p className="font-medium cursor-help">
        The priest gathers ...
      </p> */}
    </div>
  </HoverPopup>
];

const content = (
  <div className="flex flex-col items-center text-white space-y-6">

    <HoverPopup popups={[]}>
      <h1 className="text-4xl font-serif font-bold text-[#7a2f2f] mb-10">Introductory Rites</h1>
    </HoverPopup>

    <Arch items={items} />

    {/* <div className="flex flex-row items-start space-x-8">
      <div className="flex flex-col items-center space-y-4">
        <HoverPopup popups={[
          { text: "The ministers process to the altar as a hymn or chant is sung, symbolizing the Church on pilgrimage. The music unites the faithful and sets the tone for the celebration." }
        ]}>
          <h3 className="text-3xl font-medium cursor-help UnifrakturMaguntia">Entrance</h3>
        </HoverPopup>

        <img
          src="/images/Mass Procession 2.jpg"
          alt=""
          className="w-48 h-64 rounded-full object-cover opacity-70" />
      </div>


      <HoverPopup popups={[
        { text: "The priest, standing in the person of Christ, greets the people with words drawn from Scripture, proclaiming God's presence among His gathered people." }
      ]}>
        <div>
          <h3 className="text-3xl font-bold cursor-help">Greeting</h3>
          <p className="font-medium cursor-help">
            <span className="text-[#7a2f2f]">Priest: </span>
            May the peace of Christ, the love of the Father <br />
            and the Unity of the Holy Spirit be with you all
          </p>
          <p className="font-medium cursor-help">
            All: And with your spirit
          </p>
        </div>
      </HoverPopup>


      <div className='flex flex-col items-center space-y-4'>
        <HoverPopup popups={[
          { text: "All are invited to acknowledge their sins, preparing their hearts to enter the sacred mysteries with humility and trust in God’s mercy." }
        ]}>
          <h3 className="text-3xl font-bold cursor-help">Penitential Act</h3>
        </HoverPopup>

        <HoverPopup popups={[
          { text: "This ancient Greek prayer — “Lord, have mercy. Christ have mercy” — is a brief but powerful cry for help and healing, rooted in the early Church’s liturgy." }
        ]}>
          <div>
            <p className="text-xl font-medium cursor-help">Kyrie Eleison</p>
            <p className="text-xl font-medium cursor-help">Christe Eleison</p>
            <p className="text-xl font-medium cursor-help">Kyrie Eleison</p>
          </div>
        </HoverPopup>
      </div>

      <HoverPopup popups={[
        { text: "A joyful hymn of praise sung on feasts and Sundays outside of Advent and Lent, glorifying God for His goodness and the gift of salvation." }
      ]}>
        <div>
          <h3 className="text-3xl font-bold cursor-help">Gloria</h3>
          <p className="font-medium cursor-help">
            Glória in excélsis Deo<br />
            et in terra pax homínibus bonae voluntátis.<br />
          </p>
        </div>
      </HoverPopup>

      <HoverPopup popups={[
        { text: "The priest, standing in the person of Christ, greets the people with words drawn from Scripture, proclaiming God's presence among His gathered people." }
      ]}>
        <div>
          <h3 className="text-3xl font-bold cursor-help">Collect</h3>
          <p className="font-medium cursor-help">
            The priest gathers ...
          </p>
        </div>
      </HoverPopup>
    </div> */}

    <h1 className="text-4xl font-serif font-bold pt-8 text-[#7a2f2f]">Liturgy of the Word</h1>
  </div>
);

export default function NovusOrdoPage() {
  return (
    <Template
      title="Novus Ordo"
      children={content}
      image="/images/Christ Crucified.jpg"
    />
  );
}
