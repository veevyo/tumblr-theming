/*script used to change color of music player. requires jQuery*/

$(document).ready(function() {
	$('iframe.tumblr_audio_player').load( function() {
		$('iframe.tumblr_audio_player').contents().find("head")
                .append($("<style type='text/css'> .audio-player{font-family: 'TheGoodMonolith', Arial, sans-serif !important; color: #A5ADCB !important; background-color: #202233 !important; border-radius: 0 !important;} .track-name{font-family: 'TheGoodMonolith', Arial, sans-serif !important; } .track-artist{color: #A5ADCB !important;} </style>"));
        });
});
