import React, {Component} from 'react';
import axios from 'axios';

function axiosHOC(WrapperComponent, input) {
   return class Test extends Component {
        constructor(props) {
            super(props);
            this.state = {
                list: []
            }
        }

        componentDidMount() {
            this.getData().then(response => {
                console.log(response);
                this.setState({ list: response.data });
            });
        }

        getData = () => {
            return new Promise((resolve, reject) => {
                axios.get(input).then((response) => {
                    resolve(response)
                }).catch(error => {
                    reject(error);
                })
            })
        }

        render() {
            return (
               <WrapperComponent list={this.state.list} history={this.props.history} t={this.props.t}/>
            )
        }
    }
}

export default axiosHOC;