import './MainContent.css'

export const MainContent = () => {

    const blockItems = [
        {title: 'lorem', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}, 
        {title: 'lorem', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}, 
        {title: 'lorem', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}, 
        {title: 'lorem', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}, 
        {title: 'lorem', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}, 
        {title: 'lorem', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}, 
    ]
           
        
        return (
            <main>
                {blockItems.map((item) => (
                    <div className='mainBlocks'>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </main>
        );
        
    
};

