# `oceanGkeLaunchSpec` Submodule <a name="`oceanGkeLaunchSpec` Submodule" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanGkeLaunchSpec <a name="OceanGkeLaunchSpec" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec spotinst_ocean_gke_launch_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpec(scope: Construct, id: string, config: OceanGkeLaunchSpecConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig">OceanGkeLaunchSpecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig">OceanGkeLaunchSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms">putAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic">putAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask">putSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadrooms">resetAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadroomsAutomatic">resetAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetInstanceTypes">resetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNodePoolName">resetNodePoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRestrictScaleDown">resetRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeSize">resetRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeType">resetRootVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSchedulingTask">resetSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaleHeadrooms` <a name="putAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms"></a>

```typescript
public putAutoscaleHeadrooms(value: IResolvable | OceanGkeLaunchSpecAutoscaleHeadrooms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>[]

---

##### `putAutoscaleHeadroomsAutomatic` <a name="putAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic"></a>

```typescript
public putAutoscaleHeadroomsAutomatic(value: IResolvable | OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>[]

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels"></a>

```typescript
public putLabels(value: IResolvable | OceanGkeLaunchSpecLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata"></a>

```typescript
public putMetadata(value: IResolvable | OceanGkeLaunchSpecMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>[]

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces"></a>

```typescript
public putNetworkInterfaces(value: IResolvable | OceanGkeLaunchSpecNetworkInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>[]

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits"></a>

```typescript
public putResourceLimits(value: OceanGkeLaunchSpecResourceLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

---

##### `putSchedulingTask` <a name="putSchedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask"></a>

```typescript
public putSchedulingTask(value: IResolvable | OceanGkeLaunchSpecSchedulingTask[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>[]

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: OceanGkeLaunchSpecShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage"></a>

```typescript
public putStorage(value: OceanGkeLaunchSpecStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy"></a>

```typescript
public putStrategy(value: IResolvable | OceanGkeLaunchSpecStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>[]

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints"></a>

```typescript
public putTaints(value: IResolvable | OceanGkeLaunchSpecTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>[]

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy"></a>

```typescript
public putUpdatePolicy(value: OceanGkeLaunchSpecUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

---

##### `resetAutoscaleHeadrooms` <a name="resetAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadrooms"></a>

```typescript
public resetAutoscaleHeadrooms(): void
```

##### `resetAutoscaleHeadroomsAutomatic` <a name="resetAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadroomsAutomatic"></a>

```typescript
public resetAutoscaleHeadroomsAutomatic(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceTypes` <a name="resetInstanceTypes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetInstanceTypes"></a>

```typescript
public resetInstanceTypes(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNetworkInterfaces"></a>

```typescript
public resetNetworkInterfaces(): void
```

##### `resetNodePoolName` <a name="resetNodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNodePoolName"></a>

```typescript
public resetNodePoolName(): void
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetResourceLimits"></a>

```typescript
public resetResourceLimits(): void
```

##### `resetRestrictScaleDown` <a name="resetRestrictScaleDown" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRestrictScaleDown"></a>

```typescript
public resetRestrictScaleDown(): void
```

##### `resetRootVolumeSize` <a name="resetRootVolumeSize" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeSize"></a>

```typescript
public resetRootVolumeSize(): void
```

##### `resetRootVolumeType` <a name="resetRootVolumeType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeType"></a>

```typescript
public resetRootVolumeType(): void
```

##### `resetSchedulingTask` <a name="resetSchedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSchedulingTask"></a>

```typescript
public resetSchedulingTask(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSourceImage"></a>

```typescript
public resetSourceImage(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStrategy"></a>

```typescript
public resetStrategy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTaints"></a>

```typescript
public resetTaints(): void
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetUpdatePolicy"></a>

```typescript
public resetUpdatePolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanGkeLaunchSpec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceanGkeLaunchSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanGkeLaunchSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanGkeLaunchSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanGkeLaunchSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList">OceanGkeLaunchSpecAutoscaleHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomatic">autoscaleHeadroomsAutomatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList">OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList">OceanGkeLaunchSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList">OceanGkeLaunchSpecMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList">OceanGkeLaunchSpecNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference">OceanGkeLaunchSpecResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTask">schedulingTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList">OceanGkeLaunchSpecSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference">OceanGkeLaunchSpecShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference">OceanGkeLaunchSpecStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList">OceanGkeLaunchSpecStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList">OceanGkeLaunchSpecTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference">OceanGkeLaunchSpecUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomaticInput">autoscaleHeadroomsAutomaticInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsInput">autoscaleHeadroomsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypesInput">instanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadataInput">metadataInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolNameInput">nodePoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanIdInput">oceanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDownInput">restrictScaleDownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSizeInput">rootVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeTypeInput">rootVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTaskInput">schedulingTaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImageInput">sourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategyInput">strategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolName">nodePoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanId">oceanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDown">restrictScaleDown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeType">rootVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImage">sourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaleHeadrooms`<sup>Required</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadrooms"></a>

```typescript
public readonly autoscaleHeadrooms: OceanGkeLaunchSpecAutoscaleHeadroomsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList">OceanGkeLaunchSpecAutoscaleHeadroomsList</a>

---

##### `autoscaleHeadroomsAutomatic`<sup>Required</sup> <a name="autoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomatic"></a>

```typescript
public readonly autoscaleHeadroomsAutomatic: OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList">OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labels"></a>

```typescript
public readonly labels: OceanGkeLaunchSpecLabelsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList">OceanGkeLaunchSpecLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadata"></a>

```typescript
public readonly metadata: OceanGkeLaunchSpecMetadataList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList">OceanGkeLaunchSpecMetadataList</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: OceanGkeLaunchSpecNetworkInterfacesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList">OceanGkeLaunchSpecNetworkInterfacesList</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanGkeLaunchSpecResourceLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference">OceanGkeLaunchSpecResourceLimitsOutputReference</a>

---

##### `schedulingTask`<sup>Required</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTask"></a>

```typescript
public readonly schedulingTask: OceanGkeLaunchSpecSchedulingTaskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList">OceanGkeLaunchSpecSchedulingTaskList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: OceanGkeLaunchSpecShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference">OceanGkeLaunchSpecShieldedInstanceConfigOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storage"></a>

```typescript
public readonly storage: OceanGkeLaunchSpecStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference">OceanGkeLaunchSpecStorageOutputReference</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategy"></a>

```typescript
public readonly strategy: OceanGkeLaunchSpecStrategyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList">OceanGkeLaunchSpecStrategyList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taints"></a>

```typescript
public readonly taints: OceanGkeLaunchSpecTaintsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList">OceanGkeLaunchSpecTaintsList</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: OceanGkeLaunchSpecUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference">OceanGkeLaunchSpecUpdatePolicyOutputReference</a>

---

##### `autoscaleHeadroomsAutomaticInput`<sup>Optional</sup> <a name="autoscaleHeadroomsAutomaticInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomaticInput"></a>

```typescript
public readonly autoscaleHeadroomsAutomaticInput: IResolvable | OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>[]

---

##### `autoscaleHeadroomsInput`<sup>Optional</sup> <a name="autoscaleHeadroomsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsInput"></a>

```typescript
public readonly autoscaleHeadroomsInput: IResolvable | OceanGkeLaunchSpecAutoscaleHeadrooms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypesInput`<sup>Optional</sup> <a name="instanceTypesInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypesInput"></a>

```typescript
public readonly instanceTypesInput: string[];
```

- *Type:* string[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | OceanGkeLaunchSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | OceanGkeLaunchSpecMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfacesInput"></a>

```typescript
public readonly networkInterfacesInput: IResolvable | OceanGkeLaunchSpecNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>[]

---

##### `nodePoolNameInput`<sup>Optional</sup> <a name="nodePoolNameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolNameInput"></a>

```typescript
public readonly nodePoolNameInput: string;
```

- *Type:* string

---

##### `oceanIdInput`<sup>Optional</sup> <a name="oceanIdInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanIdInput"></a>

```typescript
public readonly oceanIdInput: string;
```

- *Type:* string

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimitsInput"></a>

```typescript
public readonly resourceLimitsInput: OceanGkeLaunchSpecResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

---

##### `restrictScaleDownInput`<sup>Optional</sup> <a name="restrictScaleDownInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDownInput"></a>

```typescript
public readonly restrictScaleDownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rootVolumeSizeInput`<sup>Optional</sup> <a name="rootVolumeSizeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSizeInput"></a>

```typescript
public readonly rootVolumeSizeInput: number;
```

- *Type:* number

---

##### `rootVolumeTypeInput`<sup>Optional</sup> <a name="rootVolumeTypeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeTypeInput"></a>

```typescript
public readonly rootVolumeTypeInput: string;
```

- *Type:* string

---

##### `schedulingTaskInput`<sup>Optional</sup> <a name="schedulingTaskInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTaskInput"></a>

```typescript
public readonly schedulingTaskInput: IResolvable | OceanGkeLaunchSpecSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: OceanGkeLaunchSpecShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImageInput"></a>

```typescript
public readonly sourceImageInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storageInput"></a>

```typescript
public readonly storageInput: OceanGkeLaunchSpecStorage;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategyInput"></a>

```typescript
public readonly strategyInput: IResolvable | OceanGkeLaunchSpecStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | OceanGkeLaunchSpecTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>[]

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicyInput"></a>

```typescript
public readonly updatePolicyInput: OceanGkeLaunchSpecUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodePoolName`<sup>Required</sup> <a name="nodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolName"></a>

```typescript
public readonly nodePoolName: string;
```

- *Type:* string

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanId"></a>

```typescript
public readonly oceanId: string;
```

- *Type:* string

---

##### `restrictScaleDown`<sup>Required</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDown"></a>

```typescript
public readonly restrictScaleDown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rootVolumeSize`<sup>Required</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number

---

##### `rootVolumeType`<sup>Required</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeType"></a>

```typescript
public readonly rootVolumeType: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanGkeLaunchSpecAutoscaleHeadrooms <a name="OceanGkeLaunchSpecAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecAutoscaleHeadrooms: oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}.

---

### OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecAutoscaleHeadroomsAutomatic: oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#auto_headroom_percentage OceanGkeLaunchSpec#auto_headroom_percentage}. |

---

##### `autoHeadroomPercentage`<sup>Optional</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#auto_headroom_percentage OceanGkeLaunchSpec#auto_headroom_percentage}.

---

### OceanGkeLaunchSpecConfig <a name="OceanGkeLaunchSpecConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecConfig: oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.oceanId">oceanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>[]</code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadroomsAutomatic">autoscaleHeadroomsAutomatic</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>[]</code> | autoscale_headrooms_automatic block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.metadata">metadata</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>[]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.networkInterfaces">networkInterfaces</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>[]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.nodePoolName">nodePoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.restrictScaleDown">restrictScaleDown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeType">rootVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.schedulingTask">schedulingTask</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>[]</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.sourceImage">sourceImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.strategy">strategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>[]</code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>[]</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | update_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.oceanId"></a>

```typescript
public readonly oceanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}.

---

##### `autoscaleHeadrooms`<sup>Optional</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadrooms"></a>

```typescript
public readonly autoscaleHeadrooms: IResolvable | OceanGkeLaunchSpecAutoscaleHeadrooms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>[]

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#autoscale_headrooms OceanGkeLaunchSpec#autoscale_headrooms}

---

##### `autoscaleHeadroomsAutomatic`<sup>Optional</sup> <a name="autoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadroomsAutomatic"></a>

```typescript
public readonly autoscaleHeadroomsAutomatic: IResolvable | OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>[]

autoscale_headrooms_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#autoscale_headrooms_automatic OceanGkeLaunchSpec#autoscale_headrooms_automatic}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | OceanGkeLaunchSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#labels OceanGkeLaunchSpec#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.metadata"></a>

```typescript
public readonly metadata: IResolvable | OceanGkeLaunchSpecMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>[]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#metadata OceanGkeLaunchSpec#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IResolvable | OceanGkeLaunchSpecNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>[]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#network_interfaces OceanGkeLaunchSpec#network_interfaces}

---

##### `nodePoolName`<sup>Optional</sup> <a name="nodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.nodePoolName"></a>

```typescript
public readonly nodePoolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanGkeLaunchSpecResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#resource_limits OceanGkeLaunchSpec#resource_limits}

---

##### `restrictScaleDown`<sup>Optional</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.restrictScaleDown"></a>

```typescript
public readonly restrictScaleDown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}.

---

##### `rootVolumeSize`<sup>Optional</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}.

---

##### `rootVolumeType`<sup>Optional</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeType"></a>

```typescript
public readonly rootVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}.

---

##### `schedulingTask`<sup>Optional</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.schedulingTask"></a>

```typescript
public readonly schedulingTask: IResolvable | OceanGkeLaunchSpecSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>[]

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#scheduling_task OceanGkeLaunchSpec#scheduling_task}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}.

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: OceanGkeLaunchSpecShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#shielded_instance_config OceanGkeLaunchSpec#shielded_instance_config}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.storage"></a>

```typescript
public readonly storage: OceanGkeLaunchSpecStorage;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#storage OceanGkeLaunchSpec#storage}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.strategy"></a>

```typescript
public readonly strategy: IResolvable | OceanGkeLaunchSpecStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>[]

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#strategy OceanGkeLaunchSpec#strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.taints"></a>

```typescript
public readonly taints: IResolvable | OceanGkeLaunchSpecTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#taints OceanGkeLaunchSpec#taints}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: OceanGkeLaunchSpecUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#update_policy OceanGkeLaunchSpec#update_policy}

---

### OceanGkeLaunchSpecLabels <a name="OceanGkeLaunchSpecLabels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecLabels: oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecMetadata <a name="OceanGkeLaunchSpecMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecMetadata: oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecNetworkInterfaces <a name="OceanGkeLaunchSpecNetworkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecNetworkInterfaces: oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.network">network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#network OceanGkeLaunchSpec#network}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.accessConfigs">accessConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>[]</code> | access_configs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.aliasIpRanges">aliasIpRanges</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>[]</code> | alias_ip_ranges block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#project_id OceanGkeLaunchSpec#project_id}. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#network OceanGkeLaunchSpec#network}.

---

##### `accessConfigs`<sup>Optional</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>[]

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#access_configs OceanGkeLaunchSpec#access_configs}

---

##### `aliasIpRanges`<sup>Optional</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.aliasIpRanges"></a>

```typescript
public readonly aliasIpRanges: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>[]

alias_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#alias_ip_ranges OceanGkeLaunchSpec#alias_ip_ranges}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#project_id OceanGkeLaunchSpec#project_id}.

---

### OceanGkeLaunchSpecNetworkInterfacesAccessConfigs <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecNetworkInterfacesAccessConfigs: oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#type OceanGkeLaunchSpec#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#type OceanGkeLaunchSpec#type}.

---

### OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecNetworkInterfacesAliasIpRanges: oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#ip_cidr_range OceanGkeLaunchSpec#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#subnetwork_range_name OceanGkeLaunchSpec#subnetwork_range_name}. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#ip_cidr_range OceanGkeLaunchSpec#ip_cidr_range}.

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#subnetwork_range_name OceanGkeLaunchSpec#subnetwork_range_name}.

---

### OceanGkeLaunchSpecResourceLimits <a name="OceanGkeLaunchSpecResourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecResourceLimits: oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#max_instance_count OceanGkeLaunchSpec#max_instance_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#min_instance_count OceanGkeLaunchSpec#min_instance_count}. |

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#max_instance_count OceanGkeLaunchSpec#max_instance_count}.

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#min_instance_count OceanGkeLaunchSpec#min_instance_count}.

---

### OceanGkeLaunchSpecSchedulingTask <a name="OceanGkeLaunchSpecSchedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecSchedulingTask: oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#cron_expression OceanGkeLaunchSpec#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#is_enabled OceanGkeLaunchSpec#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#task_type OceanGkeLaunchSpec#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskHeadroom">taskHeadroom</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>[]</code> | task_headroom block. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#cron_expression OceanGkeLaunchSpec#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#is_enabled OceanGkeLaunchSpec#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#task_type OceanGkeLaunchSpec#task_type}.

---

##### `taskHeadroom`<sup>Optional</sup> <a name="taskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskHeadroom"></a>

```typescript
public readonly taskHeadroom: IResolvable | OceanGkeLaunchSpecSchedulingTaskTaskHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>[]

task_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#task_headroom OceanGkeLaunchSpec#task_headroom}

---

### OceanGkeLaunchSpecSchedulingTaskTaskHeadroom <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecSchedulingTaskTaskHeadroom: oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}.

---

### OceanGkeLaunchSpecShieldedInstanceConfig <a name="OceanGkeLaunchSpecShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecShieldedInstanceConfig: oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#enable_integrity_monitoring OceanGkeLaunchSpec#enable_integrity_monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#enable_secure_boot OceanGkeLaunchSpec#enable_secure_boot}. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#enable_integrity_monitoring OceanGkeLaunchSpec#enable_integrity_monitoring}.

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#enable_secure_boot OceanGkeLaunchSpec#enable_secure_boot}.

---

### OceanGkeLaunchSpecStorage <a name="OceanGkeLaunchSpecStorage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecStorage: oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#local_ssd_count OceanGkeLaunchSpec#local_ssd_count}. |

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#local_ssd_count OceanGkeLaunchSpec#local_ssd_count}.

---

### OceanGkeLaunchSpecStrategy <a name="OceanGkeLaunchSpecStrategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecStrategy: oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#preemptible_percentage OceanGkeLaunchSpec#preemptible_percentage}. |

---

##### `preemptiblePercentage`<sup>Optional</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.property.preemptiblePercentage"></a>

```typescript
public readonly preemptiblePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#preemptible_percentage OceanGkeLaunchSpec#preemptible_percentage}.

---

### OceanGkeLaunchSpecTaints <a name="OceanGkeLaunchSpecTaints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecTaints: oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#effect OceanGkeLaunchSpec#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#effect OceanGkeLaunchSpec#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecUpdatePolicy <a name="OceanGkeLaunchSpecUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecUpdatePolicy: oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#should_roll OceanGkeLaunchSpec#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.shouldRoll"></a>

```typescript
public readonly shouldRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#should_roll OceanGkeLaunchSpec#should_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.rollConfig"></a>

```typescript
public readonly rollConfig: OceanGkeLaunchSpecUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#roll_config OceanGkeLaunchSpec#roll_config}

---

### OceanGkeLaunchSpecUpdatePolicyRollConfig <a name="OceanGkeLaunchSpecUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

const oceanGkeLaunchSpecUpdatePolicyRollConfig: oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#batch_size_percentage OceanGkeLaunchSpec#batch_size_percentage}. |

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_gke_launch_spec#batch_size_percentage OceanGkeLaunchSpec#batch_size_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>[]

---


### OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage">resetAutoHeadroomPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoHeadroomPercentage` <a name="resetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage"></a>

```typescript
public resetAutoHeadroomPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput">autoHeadroomPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoHeadroomPercentageInput`<sup>Optional</sup> <a name="autoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput"></a>

```typescript
public readonly autoHeadroomPercentageInput: number;
```

- *Type:* number

---

##### `autoHeadroomPercentage`<sup>Required</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>

---


### OceanGkeLaunchSpecAutoscaleHeadroomsList <a name="OceanGkeLaunchSpecAutoscaleHeadroomsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecAutoscaleHeadrooms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>[]

---


### OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference <a name="OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit"></a>

```typescript
public resetGpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```typescript
public readonly gpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecAutoscaleHeadrooms;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>

---


### OceanGkeLaunchSpecLabelsList <a name="OceanGkeLaunchSpecLabelsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>[]

---


### OceanGkeLaunchSpecLabelsOutputReference <a name="OceanGkeLaunchSpecLabelsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>

---


### OceanGkeLaunchSpecMetadataList <a name="OceanGkeLaunchSpecMetadataList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>[]

---


### OceanGkeLaunchSpecMetadataOutputReference <a name="OceanGkeLaunchSpecMetadataOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecMetadata;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>

---


### OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>[]

---


### OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAccessConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>

---


### OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>[]

---


### OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeNameInput"></a>

```typescript
public readonly subnetworkRangeNameInput: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>

---


### OceanGkeLaunchSpecNetworkInterfacesList <a name="OceanGkeLaunchSpecNetworkInterfacesList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>[]

---


### OceanGkeLaunchSpecNetworkInterfacesOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs">putAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges">putAliasIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAccessConfigs">resetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAliasIpRanges">resetAliasIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfigs` <a name="putAccessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs"></a>

```typescript
public putAccessConfigs(value: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAccessConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>[]

---

##### `putAliasIpRanges` <a name="putAliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges"></a>

```typescript
public putAliasIpRanges(value: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>[]

---

##### `resetAccessConfigs` <a name="resetAccessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAccessConfigs"></a>

```typescript
public resetAccessConfigs(): void
```

##### `resetAliasIpRanges` <a name="resetAliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAliasIpRanges"></a>

```typescript
public resetAliasIpRanges(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList">OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRanges">aliasIpRanges</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList">OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigsInput">accessConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRangesInput">aliasIpRangesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList">OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList</a>

---

##### `aliasIpRanges`<sup>Required</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRanges"></a>

```typescript
public readonly aliasIpRanges: OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList">OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList</a>

---

##### `accessConfigsInput`<sup>Optional</sup> <a name="accessConfigsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigsInput"></a>

```typescript
public readonly accessConfigsInput: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>[]

---

##### `aliasIpRangesInput`<sup>Optional</sup> <a name="aliasIpRangesInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRangesInput"></a>

```typescript
public readonly aliasIpRangesInput: IResolvable | OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>[]

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecNetworkInterfaces;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>

---


### OceanGkeLaunchSpecResourceLimitsOutputReference <a name="OceanGkeLaunchSpecResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```typescript
public resetMaxInstanceCount(): void
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount"></a>

```typescript
public resetMinInstanceCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeLaunchSpecResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

---


### OceanGkeLaunchSpecSchedulingTaskList <a name="OceanGkeLaunchSpecSchedulingTaskList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecSchedulingTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>[]

---


### OceanGkeLaunchSpecSchedulingTaskOutputReference <a name="OceanGkeLaunchSpecSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom">putTaskHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom">resetTaskHeadroom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaskHeadroom` <a name="putTaskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom"></a>

```typescript
public putTaskHeadroom(value: IResolvable | OceanGkeLaunchSpecSchedulingTaskTaskHeadroom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>[]

---

##### `resetTaskHeadroom` <a name="resetTaskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom"></a>

```typescript
public resetTaskHeadroom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom">taskHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList">OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput">taskHeadroomInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `taskHeadroom`<sup>Required</sup> <a name="taskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom"></a>

```typescript
public readonly taskHeadroom: OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList">OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskHeadroomInput`<sup>Optional</sup> <a name="taskHeadroomInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput"></a>

```typescript
public readonly taskHeadroomInput: IResolvable | OceanGkeLaunchSpecSchedulingTaskTaskHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>[]

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecSchedulingTask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>

---


### OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecSchedulingTaskTaskHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>[]

---


### OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit"></a>

```typescript
public resetGpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput"></a>

```typescript
public readonly gpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecSchedulingTaskTaskHeadroom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>

---


### OceanGkeLaunchSpecShieldedInstanceConfigOutputReference <a name="OceanGkeLaunchSpecShieldedInstanceConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeLaunchSpecShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

---


### OceanGkeLaunchSpecStorageOutputReference <a name="OceanGkeLaunchSpecStorageOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resetLocalSsdCount"></a>

```typescript
public resetLocalSsdCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCountInput"></a>

```typescript
public readonly localSsdCountInput: number;
```

- *Type:* number

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeLaunchSpecStorage;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

---


### OceanGkeLaunchSpecStrategyList <a name="OceanGkeLaunchSpecStrategyList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>[]

---


### OceanGkeLaunchSpecStrategyOutputReference <a name="OceanGkeLaunchSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resetPreemptiblePercentage">resetPreemptiblePercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreemptiblePercentage` <a name="resetPreemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resetPreemptiblePercentage"></a>

```typescript
public resetPreemptiblePercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentageInput">preemptiblePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preemptiblePercentageInput`<sup>Optional</sup> <a name="preemptiblePercentageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentageInput"></a>

```typescript
public readonly preemptiblePercentageInput: number;
```

- *Type:* number

---

##### `preemptiblePercentage`<sup>Required</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentage"></a>

```typescript
public readonly preemptiblePercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>

---


### OceanGkeLaunchSpecTaintsList <a name="OceanGkeLaunchSpecTaintsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get"></a>

```typescript
public get(index: number): OceanGkeLaunchSpecTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>[]

---


### OceanGkeLaunchSpecTaintsOutputReference <a name="OceanGkeLaunchSpecTaintsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeLaunchSpecTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>

---


### OceanGkeLaunchSpecUpdatePolicyOutputReference <a name="OceanGkeLaunchSpecUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig"></a>

```typescript
public putRollConfig(value: OceanGkeLaunchSpecUpdatePolicyRollConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

---

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resetRollConfig"></a>

```typescript
public resetRollConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference">OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfig"></a>

```typescript
public readonly rollConfig: OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference">OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference</a>

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput"></a>

```typescript
public readonly rollConfigInput: OceanGkeLaunchSpecUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput"></a>

```typescript
public readonly shouldRollInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRoll"></a>

```typescript
public readonly shouldRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeLaunchSpecUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

---


### OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference <a name="OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer"></a>

```typescript
import { oceanGkeLaunchSpec } from '@cdktf/provider-spotinst'

new oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```typescript
public readonly batchSizePercentageInput: number;
```

- *Type:* number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeLaunchSpecUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

---



