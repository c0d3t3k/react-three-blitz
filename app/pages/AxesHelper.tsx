import React, { useRef, useMemo, useEffect, useState, Dispatch } from 'react'
import * as THREE from 'three';

interface AxesHelperProps {
}

const AxesHelper: React.FC<AxesHelperProps> = (props) => {

  const { } = props;

  
  let [obj, setObj] = useState(new THREE.AxesHelper(5))

    
  return <primitive object={obj} position={[0, 0, 0]} />
}

export default AxesHelper