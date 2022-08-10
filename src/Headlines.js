import React, { Component } from 'react';
import $ from 'jquery';
import './assets/css/Headlines.css'


class Headlines extends Component {
    getHeadlines() {
        $.ajax ({
            type: "GET",
            url: "http://localhost:8080/headlines",
            success: function(data) {
                for (var i = 0; i < data.articles.length; i++) {
                    $( "#headlines" ).append(
                        `<a href='${data.articles[i].url}' target="_blank">
                            <p>&lrm;${data.articles[i].title}&lrm;</p>
                        </a>`
                    )
                }
            }
        })
    }

    componentDidMount() {
        this.getHeadlines();
    }

    render () {
        return (
            <div className="headlines" id="headlines">

            </div>
        )
    }
}

export default Headlines;