import React from 'react';
import ChapterRow from './ChapterRow';

class SectionRow extends React.PureComponent {
    constructor(props){
        super(props);
        this.section = props.section;
    }

    render(){
        return (
            <div className="section-row">
                <div className="section-row__title">
                    <div>{this.section.sectionTitle}</div>
                </div>
                {this.section.chapters.map(chapter => {
                    return <ChapterRow key={chapter.chapterId}/>
                })}
            </div>
        )
    }
}

export default SectionRow;