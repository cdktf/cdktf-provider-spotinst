// https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAksNpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}
  */
  readonly aksClusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}
  */
  readonly aksInfrastructureResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_region OceanAksNp#aks_region}
  */
  readonly aksRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}
  */
  readonly aksResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#availability_zones OceanAksNp#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}
  */
  readonly controllerClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#id OceanAksNp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#labels OceanAksNp#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_count OceanAksNp#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#min_count OceanAksNp#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#name OceanAksNp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_type OceanAksNp#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#tags OceanAksNp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * autoscaler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscaler OceanAksNp#autoscaler}
  */
  readonly autoscaler?: OceanAksNpAutoscaler;
  /**
  * health block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#health OceanAksNp#health}
  */
  readonly health?: OceanAksNpHealth;
  /**
  * taints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#taints OceanAksNp#taints}
  */
  readonly taints?: OceanAksNpTaints[] | cdktf.IResolvable;
}
export interface OceanAksNpAutoscalerAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function oceanAksNpAutoscalerAutoscaleDownToTerraform(struct?: OceanAksNpAutoscalerAutoscaleDownOutputReference | OceanAksNpAutoscalerAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}

export class OceanAksNpAutoscalerAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscalerAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpAutoscalerAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
    }
  }

  // max_scale_down_percentage - computed: false, optional: true, required: false
  private _maxScaleDownPercentage?: number; 
  public get maxScaleDownPercentage() {
    return this.getNumberAttribute('max_scale_down_percentage');
  }
  public set maxScaleDownPercentage(value: number) {
    this._maxScaleDownPercentage = value;
  }
  public resetMaxScaleDownPercentage() {
    this._maxScaleDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleDownPercentageInput() {
    return this._maxScaleDownPercentage;
  }
}
export interface OceanAksNpAutoscalerAutoscaleHeadroomAutomatic {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#is_enabled OceanAksNp#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#percentage OceanAksNp#percentage}
  */
  readonly percentage?: number;
}

export function oceanAksNpAutoscalerAutoscaleHeadroomAutomaticToTerraform(struct?: OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference | OceanAksNpAutoscalerAutoscaleHeadroomAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscalerAutoscaleHeadroomAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._percentage = value.percentage;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // percentage - computed: true, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface OceanAksNpAutoscalerAutoscaleHeadroom {
  /**
  * automatic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#automatic OceanAksNp#automatic}
  */
  readonly automatic?: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic;
}

export function oceanAksNpAutoscalerAutoscaleHeadroomToTerraform(struct?: OceanAksNpAutoscalerAutoscaleHeadroomOutputReference | OceanAksNpAutoscalerAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic: oceanAksNpAutoscalerAutoscaleHeadroomAutomaticToTerraform(struct!.automatic),
  }
}

export class OceanAksNpAutoscalerAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscalerAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpAutoscalerAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automatic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatic.internalValue = value.automatic;
    }
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic = new OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference(this, "automatic");
  public get automatic() {
    return this._automatic;
  }
  public putAutomatic(value: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic) {
    this._automatic.internalValue = value;
  }
  public resetAutomatic() {
    this._automatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic.internalValue;
  }
}
export interface OceanAksNpAutoscalerResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}
  */
  readonly maxVcpu?: number;
}

export function oceanAksNpAutoscalerResourceLimitsToTerraform(struct?: OceanAksNpAutoscalerResourceLimitsOutputReference | OceanAksNpAutoscalerResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
  }
}

export class OceanAksNpAutoscalerResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscalerResourceLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryGib = this._maxMemoryGib;
    }
    if (this._maxVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpu = this._maxVcpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpAutoscalerResourceLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxMemoryGib = undefined;
      this._maxVcpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxMemoryGib = value.maxMemoryGib;
      this._maxVcpu = value.maxVcpu;
    }
  }

  // max_memory_gib - computed: false, optional: true, required: false
  private _maxMemoryGib?: number; 
  public get maxMemoryGib() {
    return this.getNumberAttribute('max_memory_gib');
  }
  public set maxMemoryGib(value: number) {
    this._maxMemoryGib = value;
  }
  public resetMaxMemoryGib() {
    this._maxMemoryGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryGibInput() {
    return this._maxMemoryGib;
  }

  // max_vcpu - computed: false, optional: true, required: false
  private _maxVcpu?: number; 
  public get maxVcpu() {
    return this.getNumberAttribute('max_vcpu');
  }
  public set maxVcpu(value: number) {
    this._maxVcpu = value;
  }
  public resetMaxVcpu() {
    this._maxVcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVcpuInput() {
    return this._maxVcpu;
  }
}
export interface OceanAksNpAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscale_down OceanAksNp#autoscale_down}
  */
  readonly autoscaleDown?: OceanAksNpAutoscalerAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscale_headroom OceanAksNp#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: OceanAksNpAutoscalerAutoscaleHeadroom;
  /**
  * resource_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#resource_limits OceanAksNp#resource_limits}
  */
  readonly resourceLimits?: OceanAksNpAutoscalerResourceLimits;
}

export function oceanAksNpAutoscalerToTerraform(struct?: OceanAksNpAutoscalerOutputReference | OceanAksNpAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    autoscale_down: oceanAksNpAutoscalerAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: oceanAksNpAutoscalerAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    resource_limits: oceanAksNpAutoscalerResourceLimitsToTerraform(struct!.resourceLimits),
  }
}

export class OceanAksNpAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpAutoscaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaleIsEnabled = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
  }

  // autoscale_is_enabled - computed: false, optional: true, required: false
  private _autoscaleIsEnabled?: boolean | cdktf.IResolvable; 
  public get autoscaleIsEnabled() {
    return this.getBooleanAttribute('autoscale_is_enabled');
  }
  public set autoscaleIsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsEnabled = value;
  }
  public resetAutoscaleIsEnabled() {
    this._autoscaleIsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsEnabledInput() {
    return this._autoscaleIsEnabled;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new OceanAksNpAutoscalerAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: OceanAksNpAutoscalerAutoscaleDown) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headroom - computed: false, optional: true, required: false
  private _autoscaleHeadroom = new OceanAksNpAutoscalerAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: OceanAksNpAutoscalerAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new OceanAksNpAutoscalerResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: OceanAksNpAutoscalerResourceLimits) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }
}
export interface OceanAksNpHealth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#grace_period OceanAksNp#grace_period}
  */
  readonly gracePeriod?: number;
}

export function oceanAksNpHealthToTerraform(struct?: OceanAksNpHealthOutputReference | OceanAksNpHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
  }
}

export class OceanAksNpHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gracePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gracePeriod = value.gracePeriod;
    }
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }
}
export interface OceanAksNpTaints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#effect OceanAksNp#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#key OceanAksNp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#value OceanAksNp#value}
  */
  readonly value: string;
}

export function oceanAksNpTaintsToTerraform(struct?: OceanAksNpTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class OceanAksNpTaintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OceanAksNpTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OceanAksNpTaintsList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpTaints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OceanAksNpTaintsOutputReference {
    return new OceanAksNpTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np spotinst_ocean_aks_np}
*/
export class OceanAksNp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aks_np";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np spotinst_ocean_aks_np} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAksNpConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAksNpConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aks_np',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.106.1',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aksClusterName = config.aksClusterName;
    this._aksInfrastructureResourceGroupName = config.aksInfrastructureResourceGroupName;
    this._aksRegion = config.aksRegion;
    this._aksResourceGroupName = config.aksResourceGroupName;
    this._availabilityZones = config.availabilityZones;
    this._controllerClusterId = config.controllerClusterId;
    this._enableNodePublicIp = config.enableNodePublicIp;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._id = config.id;
    this._labels = config.labels;
    this._maxCount = config.maxCount;
    this._maxPodsPerNode = config.maxPodsPerNode;
    this._minCount = config.minCount;
    this._name = config.name;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osDiskType = config.osDiskType;
    this._osType = config.osType;
    this._spotPercentage = config.spotPercentage;
    this._tags = config.tags;
    this._autoscaler.internalValue = config.autoscaler;
    this._health.internalValue = config.health;
    this._taints.internalValue = config.taints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aks_cluster_name - computed: false, optional: false, required: true
  private _aksClusterName?: string; 
  public get aksClusterName() {
    return this.getStringAttribute('aks_cluster_name');
  }
  public set aksClusterName(value: string) {
    this._aksClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksClusterNameInput() {
    return this._aksClusterName;
  }

  // aks_infrastructure_resource_group_name - computed: false, optional: false, required: true
  private _aksInfrastructureResourceGroupName?: string; 
  public get aksInfrastructureResourceGroupName() {
    return this.getStringAttribute('aks_infrastructure_resource_group_name');
  }
  public set aksInfrastructureResourceGroupName(value: string) {
    this._aksInfrastructureResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksInfrastructureResourceGroupNameInput() {
    return this._aksInfrastructureResourceGroupName;
  }

  // aks_region - computed: false, optional: false, required: true
  private _aksRegion?: string; 
  public get aksRegion() {
    return this.getStringAttribute('aks_region');
  }
  public set aksRegion(value: string) {
    this._aksRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksRegionInput() {
    return this._aksRegion;
  }

  // aks_resource_group_name - computed: false, optional: false, required: true
  private _aksResourceGroupName?: string; 
  public get aksResourceGroupName() {
    return this.getStringAttribute('aks_resource_group_name');
  }
  public set aksResourceGroupName(value: string) {
    this._aksResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksResourceGroupNameInput() {
    return this._aksResourceGroupName;
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // controller_cluster_id - computed: true, optional: true, required: false
  private _controllerClusterId?: string; 
  public get controllerClusterId() {
    return this.getStringAttribute('controller_cluster_id');
  }
  public set controllerClusterId(value: string) {
    this._controllerClusterId = value;
  }
  public resetControllerClusterId() {
    this._controllerClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerClusterIdInput() {
    return this._controllerClusterId;
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean | cdktf.IResolvable; 
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }
  public set enableNodePublicIp(value: boolean | cdktf.IResolvable) {
    this._enableNodePublicIp = value;
  }
  public resetEnableNodePublicIp() {
    this._enableNodePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublicIpInput() {
    return this._enableNodePublicIp;
  }

  // fallback_to_ondemand - computed: false, optional: true, required: false
  private _fallbackToOndemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOndemand() {
    return this.getBooleanAttribute('fallback_to_ondemand');
  }
  public set fallbackToOndemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOndemand = value;
  }
  public resetFallbackToOndemand() {
    this._fallbackToOndemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOndemandInput() {
    return this._fallbackToOndemand;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_disk_size_gb - computed: false, optional: true, required: false
  private _osDiskSizeGb?: number; 
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb;
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // spot_percentage - computed: false, optional: true, required: false
  private _spotPercentage?: number; 
  public get spotPercentage() {
    return this.getNumberAttribute('spot_percentage');
  }
  public set spotPercentage(value: number) {
    this._spotPercentage = value;
  }
  public resetSpotPercentage() {
    this._spotPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPercentageInput() {
    return this._spotPercentage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new OceanAksNpAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: OceanAksNpAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new OceanAksNpHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: OceanAksNpHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new OceanAksNpTaintsList(this, "taints", true);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: OceanAksNpTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aks_cluster_name: cdktf.stringToTerraform(this._aksClusterName),
      aks_infrastructure_resource_group_name: cdktf.stringToTerraform(this._aksInfrastructureResourceGroupName),
      aks_region: cdktf.stringToTerraform(this._aksRegion),
      aks_resource_group_name: cdktf.stringToTerraform(this._aksResourceGroupName),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      controller_cluster_id: cdktf.stringToTerraform(this._controllerClusterId),
      enable_node_public_ip: cdktf.booleanToTerraform(this._enableNodePublicIp),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_count: cdktf.numberToTerraform(this._maxCount),
      max_pods_per_node: cdktf.numberToTerraform(this._maxPodsPerNode),
      min_count: cdktf.numberToTerraform(this._minCount),
      name: cdktf.stringToTerraform(this._name),
      os_disk_size_gb: cdktf.numberToTerraform(this._osDiskSizeGb),
      os_disk_type: cdktf.stringToTerraform(this._osDiskType),
      os_type: cdktf.stringToTerraform(this._osType),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      autoscaler: oceanAksNpAutoscalerToTerraform(this._autoscaler.internalValue),
      health: oceanAksNpHealthToTerraform(this._health.internalValue),
      taints: cdktf.listMapper(oceanAksNpTaintsToTerraform, true)(this._taints.internalValue),
    };
  }
}
