import React, { Component } from 'react';
import ButtonDirection from './ButtonDirection';
import InputPos from './InputPos';
import SelectIndice from './SelectIndice';
import ButtonList from './ButtonList';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const toastPos = withReactContent(Swal);

export default class Hunt extends Component {
    constructor(props){
      super(props);
      this.handleDirection = this.handleDirection.bind(this);
      this.handleXpos = this.handleXpos.bind(this);
      this.handleYpos = this.handleYpos.bind(this);
      this.handleSelectedItem = this.handleSelectedItem.bind(this);
      this.handlePhorreurButton = this.handlePhorreurButton.bind(this);
      this.state = {
        buttonDirect: 'null',
        x: "0",
        y: "0",
        listIndice: [],
        indiceFound: [],
        selectedIndice: '',
        error: null,
        isLoading: false,
        buttonList: false
      }
    }

    async handleDirection(e){
        if(this.state.x != "" && this.state.y != ""){
            this.setState({
                buttonDirect: e,
                isLoading: true
            });
            try {
                let xPos = parseInt(this.state.x);
                let yPos = parseInt(this.state.y);
                let direction = e;
                //Gestion du cas unique lié à la map [3;-7] direction up
                if(xPos == 3 && yPos == -7 && direction == "up"){
                    xPos = xPos + 1;
                }
                //Gestion du cas unique lié à la map [4;-8] direction left
                if(xPos == 4 && yPos == -8 && direction == "left"){
                    xPos = 5;
                    yPos = -9;
                }
                //Gestion du cas unique lié à la map [-34;-16]
                if(xPos == -34 && yPos == -16 && direction == "right"){
                    yPos = -15;
                }
                //Gestion du cas unique lié à la map [-33;-15] direction left
                if(xPos == -33 && yPos == -15 && direction == "left"){
                    xPos = -33;
                    yPos = -16;
                }
                //Gestion du cas unique lié à la map [-81;-37] direction right
                if(xPos == -81 && yPos == -37 && direction == "right"){
                    xPos = -81;
                    yPos = -38
                }
                const result = await axios.get('/api/indices/' + direction + '?x=' + xPos + '&y=' + yPos);
                this.setState({
                    listIndice: result.data,
                    isLoading: false
                })
            } catch (error) {
                this.setState({
                    error,
                    isLoading: false
                })
            }
        }
    }

    async handleSelectedItem(e){
        this.setState({
            selectedIndice: e,
            isLoading: true
        });
        if(e == 'Phorreur'){
            this.setState({
                isLoading: false
            })
        } else if(e != 'Sélectionnez un indice'){
            try {
                const tabIndSpeCA    = ['Boîte aux lettres', 'Caisse', 'Plante éventail', 'Rondin de bois', 'Souche qui ne repousse pas', 'Tronc creux couché', 'Brouette', 'Sac', 'Tombe'];
                const tabIndSpePlDC  = ['Abri en toile', 'Barque', 'Barque renversée', 'Chaloupe', 'Chaloupe renversée', 'Rafiot renversé', 'Caisse explosive'];
                let xPos = parseInt(this.state.x);
                let yPos = parseInt(this.state.y);
                let direction = this.state.buttonDirect;
                //Gestion du cas unique lié à la map [3;-7] direction up
                if(xPos == 3 && yPos == -7 && direction == "up"){
                    xPos = xPos + 1;
                }
                //Gestion du cas unique lié à la map [2;-7] direction right
                if(xPos == 2 && yPos == -7 && direction == "right"){
                    if(e == 'Statue' || e == 'Statue à queue pointue'){
                        xPos = 3;
                    }
                }
                //Gestion du cas unique lié aux maps [5;-8] & [6,-8] direction left
                if((xPos == 5 || xPos == 6) && yPos == -8 && direction == "left"){
                    let found = tabIndSpeCA.find(element => element == e);
                    if(found != null){
                        xPos = 5;
                        yPos = -9;
                    }
                }
                //Gestion du cas unique lié à la map [4;-8] direction left
                if(xPos == 4 && yPos == -8 && direction == "left"){
                    xPos = 5;
                    yPos = -9;
                }
                //Gestion du cas unique lié à la map [-34;-16] direction right
                if(xPos == -34 && yPos == -16 && direction == "right"){
                    yPos = -15;
                }
                //Gestion du cas unique lié aux map avant [-33;-15] direction left
                if(xPos <= -25 && xPos > -33 && yPos == -15 && direction == "left"){
                    let found = tabIndSpePlDC.find(element => element == e);
                    if(found != null){
                        xPos = -33;
                        yPos = -16;
                    }
                }
                //Gestion du cas unique lié à la map [-33;-15] direction left
                if(xPos == -33 && yPos == -15 && direction == "left"){
                    xPos = -33;
                    yPos = -16
                }
                //Gestion du cas unique lié à la map [-81;-37] direction right
                if(xPos == -81 && yPos == -37 && direction == "right"){
                    xPos = -81;
                    yPos = -38
                }
                const result = await axios.get('/api/' + e + '/pos?' + 'direction=' + direction + '&x=' + xPos + '&y=' + yPos);
                xPos = result.data.map(x => x.x_indice)[0];
                yPos = result.data.map(y => y.y_indice)[0];
                let xPosFri;
                let yPosFri;
                if(xPos == -81 && yPos == -38) {
                    //Gestion du cas unique map [-80;-38] direction left
                    xPos = "-81";
                    yPos = "-37";
                    this.setState({
                        indiceFound: result.data,
                        isLoading: false,
                        x: xPos,
                        y: yPos,
                    })
                } else {
                    xPosFri = xPos;
                    yPosFri = yPos;
                    this.setState({
                        indiceFound: result.data,
                        isLoading: false,
                        x: result.data.map(x => x.x_indice)[0].toString(),
                        y: result.data.map(y => y.y_indice)[0].toString(),
                    })
                }
                toastPos.fire({
                    toast: true,
                    icon: 'success',
                    position: 'top-end',
                    showConfirmButton: false,
                    title: '[ ' + xPos.toString() + ' ; ' + yPos.toString() + ' ]',
                })
            } catch (error){
                this.setState({
                    error,
                    isLoading: false
                })
                toastPos.fire({
                    toast: true,
                    icon: 'error',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    title: 'Une erreur est survenue...'
                })
            }
            this.setState({
                listIndice: [],
                buttonDirect: 'null',
                indiceFound: []
            })
        }
    }

    handlePhorreurButton(add){
        if(this.state.buttonDirect == "up" || this.state.buttonDirect == "down"){
            let pos = parseInt(this.state.y);
            this.state.buttonDirect == "up"
            ? pos = pos - add
            : pos = pos + add;
            this.setState({
                y: pos.toString(),
                selectedIndice: [],
                buttonDirect: 'null',
                indiceFound: [],
                listIndice: []
            })
            toastPos.fire({
                toast: true,
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                title: '[ ' + this.state.x + ' ; ' + pos + ' ] '
            })
        } else {
            let pos = parseInt(this.state.x);
            this.state.buttonDirect == "left"
            ? pos = pos - add
            : pos = pos + add;
            this.setState({
                x: pos.toString(),
                selectedIndice: [],
                buttonDirect: 'null',
                indiceFound: [],
                listIndice: []
            })
            toastPos.fire({
                toast: true,
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                title: '[ ' + pos + ' ; ' + this.state.y + ' ] '
            })
        }
    }

    handleXpos(e){
        this.setState({
            x: e.toString(),
            buttonDirect: 'null',
            listIndice: [],
            indiceFound: [],
            selectedIndice: '',
        })
    }

    handleYpos(e){
        this.setState({
            y: e.toString(),
            buttonDirect: 'null',
            listIndice: [],
            indiceFound: [],
            selectedIndice: '',
        })
    }

    render(){
        return(
            <div className="app">
                <div className="input-block">
                    <InputPos 
                        pos="x"
                        value={this.state.x}
                        onXposChange={this.handleXpos}
                    />
                    <span className="point">
                        ;
                    </span>
                    <InputPos 
                        pos="y"
                        value={this.state.y}
                        onYposChange={this.handleYpos}
                    />
                </div>
                <div className="directional-block">
                    <ButtonDirection
                        value='left'
                        onButtonDirectionClick={this.handleDirection}
                        selected={this.state.buttonDirect}
                    />
                    <ButtonDirection
                        value='up'
                        onButtonDirectionClick={this.handleDirection}
                        selected={this.state.buttonDirect}
                    />
                    <ButtonDirection
                        value='down'
                        onButtonDirectionClick={this.handleDirection}
                        selected={this.state.buttonDirect}
                    />
                    <ButtonDirection
                        value='right'
                        onButtonDirectionClick={this.handleDirection}
                        selected={this.state.buttonDirect}
                    />
                </div>
                <div className="selection-block">
                    <SelectIndice
                        onSelectChange={this.handleSelectedItem}
                        listIndice={this.state.listIndice}
                        direction={this.state.buttonDirect}
                        loading={this.state.isLoading}
                    >
                        
                    </SelectIndice>
                </div>
                <ButtonList
                    indice={this.state.selectedIndice}
                    onChange={this.handlePhorreurButton}
                />
            </div>
        );
    }
} 