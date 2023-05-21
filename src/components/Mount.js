class Component{
    mount(el,data,cardFor,i){
        if(data){
            if(el){
                el.appendChild(this.render(data,cardFor,i));
                return;
            }
            document.body.appendChild(this.render(data,cardFor,i));
            return
        }
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }
}

export default Component;