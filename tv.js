let Tv = function(status, currentChanel, volume){
    this.status = status;
    this.currentChanel = currentChanel;
    this.volume = volume;
    this.getVolume = function(){
        return this.volume;
    };

let screen = document.getElementById('tvScreen');
    this.onOff = function () {
        if (this.status == 'on') {
            screen.src = "tv3.png";
            this.status = 'off';
        } else {
            screen.src = "tvOff.png";
            this.status = 'on';
        }
    };

    this.setChanel = function (index) {
        if (this.status == 'off') {
            screen.src = "tv" + index + ".png";
        } else {
            alert('Chưa bật tv');
        }
    };

    this.setVolumeUp = function () {
        if (this.status == 'off') {
            this.volume ++;
            alert('âm lượng: ' + tv.getVolume());
        } else {
            alert('Chưa bật tv');
        }
    };

    this.setVolumeDown = function () {
        if (this.status == 'off') {
            this.volume --;
            alert('âm lượng: ' + tv.getVolume());
        } else {
            alert('Chưa bật tv');
        }
    }
};

let Remote = function () {
    this.power = function (tv) {
        tv.onOff();
    };

    this.setChanel3 = function (tv) {
        tv.setChanel(3);
    };

    this.setChanel7 = function (tv) {
        tv.setChanel(7);
    };

    this.setVolumeUp = function (tv) {
        tv.setVolumeUp();
    };

    this.setVolumeDown = function (tv) {
        tv.setVolumeDown();
    }
};

let tv = new Tv('on', 'tv3', 20);
let rm = new Remote();

function power() {
    rm.power(tv);
}

function btn3() {
    rm.setChanel3(tv);
}

function btn7() {
    rm.setChanel7(tv);
}

function btnVolUp() {
    rm.setVolumeUp(tv);
}

function btnVolDown() {
    rm.setVolumeDown(tv);
}

