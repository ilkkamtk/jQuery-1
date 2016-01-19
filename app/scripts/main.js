$(function () {
    var timer = null;
    var timezone = '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius';

    var tzText = function () {
        $('#tzText').text(timezone);
    };

    tzText();

    var kello = function () {
        var now = moment();
        $('#kello').text(now.format('HH.mm:ss'));
    };

    kello();

    var stopTimer = function () {
        window.clearInterval(timer);
        $('#status').text('kello pysäytetty');
        $('#status').removeClass('text-success');
        $('#status').addClass('text-danger');
    };

    $('#start').click(function () {
        timer = window.setInterval(kello, 1000);
    });

    $('#stop').click(stopTimer);

    var suurenna = function () {
        $("#kello").animate({
            'font-size': '4em'
        }, {
            complete: function () {
                $("#toggle").unbind();
                $("#toggle").click(pienenna);
            }
        });
    };

    var pienenna = function () {
        $("#kello").animate({
            'font-size': '1em'
        }, {
            complete: function () {
                $("#toggle").unbind();
                $("#toggle").click(suurenna);
            }
        });
    };

    $("#toggle").click(suurenna);

    $('#tz').change(function (evt) {
        timezone = $(evt.target).find('option:selected').text();
        kello();
        tzText();
    });
});