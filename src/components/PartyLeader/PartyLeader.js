function PartyLeader({list}) {
    console.log('props are:', list);
    
    return(
        <>
            <h2>Party Leader</h2>
            <>{list[0] && <h3>{list[0].name}</h3>}</>
        </>
        
    );
}

export default PartyLeader;