# `oceanAksVirtualNodeGroup` Submodule <a name="`oceanAksVirtualNodeGroup` Submodule" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksVirtualNodeGroup <a name="OceanAksVirtualNodeGroup" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group spotinst_ocean_aks_virtual_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup(scope: Construct, id: string, config: OceanAksVirtualNodeGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig">OceanAksVirtualNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig">OceanAksVirtualNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale">putAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel">putLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification">putLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint">putTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetAutoscale">resetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLaunchSpecification">resetLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetTaint">resetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscale` <a name="putAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale"></a>

```typescript
public putAutoscale(value: IResolvable | OceanAksVirtualNodeGroupAutoscale[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a>[]

---

##### `putLabel` <a name="putLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel"></a>

```typescript
public putLabel(value: IResolvable | OceanAksVirtualNodeGroupLabel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a>[]

---

##### `putLaunchSpecification` <a name="putLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification"></a>

```typescript
public putLaunchSpecification(value: IResolvable | OceanAksVirtualNodeGroupLaunchSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a>[]

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits"></a>

```typescript
public putResourceLimits(value: IResolvable | OceanAksVirtualNodeGroupResourceLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a>[]

---

##### `putTaint` <a name="putTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint"></a>

```typescript
public putTaint(value: IResolvable | OceanAksVirtualNodeGroupTaint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a>[]

---

##### `resetAutoscale` <a name="resetAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetAutoscale"></a>

```typescript
public resetAutoscale(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetLaunchSpecification` <a name="resetLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLaunchSpecification"></a>

```typescript
public resetLaunchSpecification(): void
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetResourceLimits"></a>

```typescript
public resetResourceLimits(): void
```

##### `resetTaint` <a name="resetTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetTaint"></a>

```typescript
public resetTaint(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanAksVirtualNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceanAksVirtualNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanAksVirtualNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanAksVirtualNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanAksVirtualNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList">OceanAksVirtualNodeGroupAutoscaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.label">label</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList">OceanAksVirtualNodeGroupLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecification">launchSpecification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList">OceanAksVirtualNodeGroupLaunchSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList">OceanAksVirtualNodeGroupResourceLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList">OceanAksVirtualNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscaleInput">autoscaleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.labelInput">labelInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecificationInput">launchSpecificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanIdInput">oceanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taintInput">taintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanId">oceanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscale"></a>

```typescript
public readonly autoscale: OceanAksVirtualNodeGroupAutoscaleList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList">OceanAksVirtualNodeGroupAutoscaleList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.label"></a>

```typescript
public readonly label: OceanAksVirtualNodeGroupLabelList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList">OceanAksVirtualNodeGroupLabelList</a>

---

##### `launchSpecification`<sup>Required</sup> <a name="launchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecification"></a>

```typescript
public readonly launchSpecification: OceanAksVirtualNodeGroupLaunchSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList">OceanAksVirtualNodeGroupLaunchSpecificationList</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanAksVirtualNodeGroupResourceLimitsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList">OceanAksVirtualNodeGroupResourceLimitsList</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taint"></a>

```typescript
public readonly taint: OceanAksVirtualNodeGroupTaintList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList">OceanAksVirtualNodeGroupTaintList</a>

---

##### `autoscaleInput`<sup>Optional</sup> <a name="autoscaleInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscaleInput"></a>

```typescript
public readonly autoscaleInput: IResolvable | OceanAksVirtualNodeGroupAutoscale[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.labelInput"></a>

```typescript
public readonly labelInput: IResolvable | OceanAksVirtualNodeGroupLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a>[]

---

##### `launchSpecificationInput`<sup>Optional</sup> <a name="launchSpecificationInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecificationInput"></a>

```typescript
public readonly launchSpecificationInput: IResolvable | OceanAksVirtualNodeGroupLaunchSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oceanIdInput`<sup>Optional</sup> <a name="oceanIdInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanIdInput"></a>

```typescript
public readonly oceanIdInput: string;
```

- *Type:* string

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimitsInput"></a>

```typescript
public readonly resourceLimitsInput: IResolvable | OceanAksVirtualNodeGroupResourceLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a>[]

---

##### `taintInput`<sup>Optional</sup> <a name="taintInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taintInput"></a>

```typescript
public readonly taintInput: IResolvable | OceanAksVirtualNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a>[]

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanId"></a>

```typescript
public readonly oceanId: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksVirtualNodeGroupAutoscale <a name="OceanAksVirtualNodeGroupAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupAutoscale: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#auto_headroom_percentage OceanAksVirtualNodeGroup#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a>[]</code> | autoscale_headroom block. |

---

##### `autoHeadroomPercentage`<sup>Optional</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#auto_headroom_percentage OceanAksVirtualNodeGroup#auto_headroom_percentage}.

---

##### `autoscaleHeadroom`<sup>Optional</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: IResolvable | OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a>[]

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#autoscale_headroom OceanAksVirtualNodeGroup#autoscale_headroom}

---

### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#num_of_units OceanAksVirtualNodeGroup#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#cpu_per_unit OceanAksVirtualNodeGroup#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#gpu_per_unit OceanAksVirtualNodeGroup#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#memory_per_unit OceanAksVirtualNodeGroup#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#num_of_units OceanAksVirtualNodeGroup#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#cpu_per_unit OceanAksVirtualNodeGroup#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#gpu_per_unit OceanAksVirtualNodeGroup#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#memory_per_unit OceanAksVirtualNodeGroup#memory_per_unit}.

---

### OceanAksVirtualNodeGroupConfig <a name="OceanAksVirtualNodeGroupConfig" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupConfig: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#name OceanAksVirtualNodeGroup#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.oceanId">oceanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#ocean_id OceanAksVirtualNodeGroup#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.autoscale">autoscale</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a>[]</code> | autoscale block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#id OceanAksVirtualNodeGroup#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.label">label</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a>[]</code> | label block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.launchSpecification">launchSpecification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a>[]</code> | launch_specification block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.resourceLimits">resourceLimits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a>[]</code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.taint">taint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a>[]</code> | taint block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#zones OceanAksVirtualNodeGroup#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#name OceanAksVirtualNodeGroup#name}.

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.oceanId"></a>

```typescript
public readonly oceanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#ocean_id OceanAksVirtualNodeGroup#ocean_id}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.autoscale"></a>

```typescript
public readonly autoscale: IResolvable | OceanAksVirtualNodeGroupAutoscale[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a>[]

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#autoscale OceanAksVirtualNodeGroup#autoscale}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#id OceanAksVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.label"></a>

```typescript
public readonly label: IResolvable | OceanAksVirtualNodeGroupLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a>[]

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#label OceanAksVirtualNodeGroup#label}

---

##### `launchSpecification`<sup>Optional</sup> <a name="launchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.launchSpecification"></a>

```typescript
public readonly launchSpecification: IResolvable | OceanAksVirtualNodeGroupLaunchSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a>[]

launch_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#launch_specification OceanAksVirtualNodeGroup#launch_specification}

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: IResolvable | OceanAksVirtualNodeGroupResourceLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a>[]

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#resource_limits OceanAksVirtualNodeGroup#resource_limits}

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.taint"></a>

```typescript
public readonly taint: IResolvable | OceanAksVirtualNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a>[]

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#taint OceanAksVirtualNodeGroup#taint}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#zones OceanAksVirtualNodeGroup#zones}.

---

### OceanAksVirtualNodeGroupLabel <a name="OceanAksVirtualNodeGroupLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupLabel: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

### OceanAksVirtualNodeGroupLaunchSpecification <a name="OceanAksVirtualNodeGroupLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupLaunchSpecification: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.maxPods">maxPods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#max_pods OceanAksVirtualNodeGroup#max_pods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a>[]</code> | tag block. |

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#max_pods OceanAksVirtualNodeGroup#max_pods}.

---

##### `osDisk`<sup>Optional</sup> <a name="osDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.osDisk"></a>

```typescript
public readonly osDisk: OceanAksVirtualNodeGroupLaunchSpecificationOsDisk;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#os_disk OceanAksVirtualNodeGroup#os_disk}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.tag"></a>

```typescript
public readonly tag: IResolvable | OceanAksVirtualNodeGroupLaunchSpecificationTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#tag OceanAksVirtualNodeGroup#tag}

---

### OceanAksVirtualNodeGroupLaunchSpecificationOsDisk <a name="OceanAksVirtualNodeGroupLaunchSpecificationOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupLaunchSpecificationOsDisk: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.sizeGb">sizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#size_gb OceanAksVirtualNodeGroup#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#type OceanAksVirtualNodeGroup#type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.utilizeEphemeralStorage">utilizeEphemeralStorage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#utilize_ephemeral_storage OceanAksVirtualNodeGroup#utilize_ephemeral_storage}. |

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#size_gb OceanAksVirtualNodeGroup#size_gb}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#type OceanAksVirtualNodeGroup#type}.

---

##### `utilizeEphemeralStorage`<sup>Optional</sup> <a name="utilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.utilizeEphemeralStorage"></a>

```typescript
public readonly utilizeEphemeralStorage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#utilize_ephemeral_storage OceanAksVirtualNodeGroup#utilize_ephemeral_storage}.

---

### OceanAksVirtualNodeGroupLaunchSpecificationTag <a name="OceanAksVirtualNodeGroupLaunchSpecificationTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupLaunchSpecificationTag: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

### OceanAksVirtualNodeGroupResourceLimits <a name="OceanAksVirtualNodeGroupResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupResourceLimits: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#max_instance_count OceanAksVirtualNodeGroup#max_instance_count}. |

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#max_instance_count OceanAksVirtualNodeGroup#max_instance_count}.

---

### OceanAksVirtualNodeGroupTaint <a name="OceanAksVirtualNodeGroupTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

const oceanAksVirtualNodeGroupTaint: oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#effect OceanAksVirtualNodeGroup#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#effect OceanAksVirtualNodeGroup#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get"></a>

```typescript
public get(index: number): OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a>[]

---


### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetGpuPerUnit"></a>

```typescript
public resetGpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnitInput"></a>

```typescript
public readonly gpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a>

---


### OceanAksVirtualNodeGroupAutoscaleList <a name="OceanAksVirtualNodeGroupAutoscaleList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get"></a>

```typescript
public get(index: number): OceanAksVirtualNodeGroupAutoscaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupAutoscale[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a>[]

---


### OceanAksVirtualNodeGroupAutoscaleOutputReference <a name="OceanAksVirtualNodeGroupAutoscaleOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom">putAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoHeadroomPercentage">resetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoscaleHeadroom">resetAutoscaleHeadroom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaleHeadroom` <a name="putAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom"></a>

```typescript
public putAutoscaleHeadroom(value: IResolvable | OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a>[]

---

##### `resetAutoHeadroomPercentage` <a name="resetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoHeadroomPercentage"></a>

```typescript
public resetAutoHeadroomPercentage(): void
```

##### `resetAutoscaleHeadroom` <a name="resetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoscaleHeadroom"></a>

```typescript
public resetAutoscaleHeadroom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentageInput">autoHeadroomPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroomInput">autoscaleHeadroomInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscaleHeadroom`<sup>Required</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList</a>

---

##### `autoHeadroomPercentageInput`<sup>Optional</sup> <a name="autoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentageInput"></a>

```typescript
public readonly autoHeadroomPercentageInput: number;
```

- *Type:* number

---

##### `autoscaleHeadroomInput`<sup>Optional</sup> <a name="autoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroomInput"></a>

```typescript
public readonly autoscaleHeadroomInput: IResolvable | OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom</a>[]

---

##### `autoHeadroomPercentage`<sup>Required</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupAutoscale;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale">OceanAksVirtualNodeGroupAutoscale</a>

---


### OceanAksVirtualNodeGroupLabelList <a name="OceanAksVirtualNodeGroupLabelList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get"></a>

```typescript
public get(index: number): OceanAksVirtualNodeGroupLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a>[]

---


### OceanAksVirtualNodeGroupLabelOutputReference <a name="OceanAksVirtualNodeGroupLabelOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupLabel;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel">OceanAksVirtualNodeGroupLabel</a>

---


### OceanAksVirtualNodeGroupLaunchSpecificationList <a name="OceanAksVirtualNodeGroupLaunchSpecificationList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get"></a>

```typescript
public get(index: number): OceanAksVirtualNodeGroupLaunchSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupLaunchSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a>[]

---


### OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetUtilizeEphemeralStorage">resetUtilizeEphemeralStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUtilizeEphemeralStorage` <a name="resetUtilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetUtilizeEphemeralStorage"></a>

```typescript
public resetUtilizeEphemeralStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorageInput">utilizeEphemeralStorageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorage">utilizeEphemeralStorage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGbInput"></a>

```typescript
public readonly sizeGbInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `utilizeEphemeralStorageInput`<sup>Optional</sup> <a name="utilizeEphemeralStorageInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorageInput"></a>

```typescript
public readonly utilizeEphemeralStorageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `utilizeEphemeralStorage`<sup>Required</sup> <a name="utilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorage"></a>

```typescript
public readonly utilizeEphemeralStorage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAksVirtualNodeGroupLaunchSpecificationOsDisk;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---


### OceanAksVirtualNodeGroupLaunchSpecificationOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk">putOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetMaxPods">resetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetOsDisk">resetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOsDisk` <a name="putOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk"></a>

```typescript
public putOsDisk(value: OceanAksVirtualNodeGroupLaunchSpecificationOsDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag"></a>

```typescript
public putTag(value: IResolvable | OceanAksVirtualNodeGroupLaunchSpecificationTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a>[]

---

##### `resetMaxPods` <a name="resetMaxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetMaxPods"></a>

```typescript
public resetMaxPods(): void
```

##### `resetOsDisk` <a name="resetOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetOsDisk"></a>

```typescript
public resetOsDisk(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference">OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList">OceanAksVirtualNodeGroupLaunchSpecificationTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPodsInput">maxPodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDiskInput">osDiskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPods">maxPods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDisk"></a>

```typescript
public readonly osDisk: OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference">OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tag"></a>

```typescript
public readonly tag: OceanAksVirtualNodeGroupLaunchSpecificationTagList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList">OceanAksVirtualNodeGroupLaunchSpecificationTagList</a>

---

##### `maxPodsInput`<sup>Optional</sup> <a name="maxPodsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPodsInput"></a>

```typescript
public readonly maxPodsInput: number;
```

- *Type:* number

---

##### `osDiskInput`<sup>Optional</sup> <a name="osDiskInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDiskInput"></a>

```typescript
public readonly osDiskInput: OceanAksVirtualNodeGroupLaunchSpecificationOsDisk;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | OceanAksVirtualNodeGroupLaunchSpecificationTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a>[]

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupLaunchSpecification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification">OceanAksVirtualNodeGroupLaunchSpecification</a>

---


### OceanAksVirtualNodeGroupLaunchSpecificationTagList <a name="OceanAksVirtualNodeGroupLaunchSpecificationTagList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get"></a>

```typescript
public get(index: number): OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupLaunchSpecificationTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a>[]

---


### OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupLaunchSpecificationTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag">OceanAksVirtualNodeGroupLaunchSpecificationTag</a>

---


### OceanAksVirtualNodeGroupResourceLimitsList <a name="OceanAksVirtualNodeGroupResourceLimitsList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get"></a>

```typescript
public get(index: number): OceanAksVirtualNodeGroupResourceLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupResourceLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a>[]

---


### OceanAksVirtualNodeGroupResourceLimitsOutputReference <a name="OceanAksVirtualNodeGroupResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```typescript
public resetMaxInstanceCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupResourceLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits">OceanAksVirtualNodeGroupResourceLimits</a>

---


### OceanAksVirtualNodeGroupTaintList <a name="OceanAksVirtualNodeGroupTaintList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get"></a>

```typescript
public get(index: number): OceanAksVirtualNodeGroupTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a>[]

---


### OceanAksVirtualNodeGroupTaintOutputReference <a name="OceanAksVirtualNodeGroupTaintOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer"></a>

```typescript
import { oceanAksVirtualNodeGroup } from '@cdktf/provider-spotinst'

new oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksVirtualNodeGroupTaint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint">OceanAksVirtualNodeGroupTaint</a>

---



