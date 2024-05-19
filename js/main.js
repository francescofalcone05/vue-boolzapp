const { createApp } = Vue

createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '16:15',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '16:30',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '16:15',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '15:50',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '15:51',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      indexClicked: '',
      nameClicked: '',
      imgClicked: '',
      dateClicked: '',
      messageInput: '',
      searchInput:'',
      sentMessage: {},
      dayRandom:0,
      hoursNumber: 0,
      minutesNumber: 0,
      rispostaSettata: {},
      classeContatto:'',

      //dataOggiChat: false,
      dropDown1: false,
      dropDown2: false,
    }
  },
  methods: {
    dropDownMenu() {

    },
//non funziona
    findName(){
      console.log(this.searchInput);
      if (this.searchInput !=='') {
        this.classeContatto = 'hide'
        console.log(this.classeContatto);
      } else {
        
      }
    },

    getUtenteCliccato(numero) {
      this.dataOggiChat = false
      this.indexClicked = numero;
      this.nameClicked = this.contacts[numero].name
      this.imgClicked = this.contacts[numero].avatar
      this.createDateRandom()
    },

    lastElement(array) {
      const ultimoIndice = array.length - 1
      return array[ultimoIndice]
    },

    sendMessage() {
      let stopTimer = true
      this.dataOggiChat = true
      let minutes = Math.floor(Math.random() * (59 - 0 + 1)) + 0;
      let hours = Math.floor(Math.random() * (23 - 17 + 1)) + 17;
      if (hours <= 9) {
        hours = '0' + hours
      } else {
        hours = hours
      }
      if (minutes <= 9) {
        minutes = '0' + minutes
      } else {
        minutes = minutes
      }
      this.sentMessage = {
        date: `${hours}:${minutes}`,
        message: this.messageInput,
        status: 'sent'
      };
      this.contacts[this.indexClicked].messages.push(this.sentMessage);
      let timer = setTimeout(() => {
        this.rispostaSettata = {
          date: `${hours}:${minutes}`,
          message: 'Molto bene!',
          status: 'recived'
        };
        this.contacts[this.indexClicked].messages.push(this.rispostaSettata);
        stopTimer=false
      }, 1000);
      this.messageInput = '';
    },
    
    createDateRandom() {
      let minutes = Math.floor(Math.random() * (59 - 0 + 1)) + 0;
      let hours = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
      let dayNum = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
      this.dayRandom = dayNum
      if (hours <= 9) {
        this.hoursNumber = '0' + hours
      } else {
        this.hoursNumber = hours
      }
      if (minutes <= 9) {
        this.minutesNumber = '0' + minutes
      } else {
        this.minutesNumber = minutes
      }
    },
  },
  mounted() {

  }

}).mount('#app')